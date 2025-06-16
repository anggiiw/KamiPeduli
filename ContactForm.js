document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const passwordInput = document.getElementById('password');

        contactForm.addEventListener('submit', function(event) {
            let formIsValid = true;

            validatePassword(passwordInput);

            contactForm.querySelectorAll('input[required], textarea[required]').forEach(input => {
                if (input.id !== 'password') {
                    if (!input.checkValidity()) {
                        formIsValid = false;
                        input.classList.add('is-invalid');
                    } else {
                        input.classList.remove('is-invalid');
                    }
                }
            });

            if (passwordInput.classList.contains('is-invalid')) {
                formIsValid = false;
            }

            if (!formIsValid) {
                event.preventDefault();
                alert('Mohon periksa kembali inputan Anda. Ada kesalahan validasi.');
            } else {
                alert('Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.');
            }
        });

        passwordInput.addEventListener('input', () => validatePassword(passwordInput));

        function validatePassword(input) {
            const password = input.value;
            const errorElement = document.getElementById('passwordError');
            let isValid = true;
            let errorMessage = '';

            if (password.length < 8) {
                errorMessage += 'Minimal 8 karakter. ';
                isValid = false;
            }
            if (!/[A-Z]/.test(password)) {
                errorMessage += 'Harus mengandung huruf besar. ';
                isValid = false;
            }
            if (!/[a-z]/.test(password)) {
                errorMessage += 'Harus mengandung huruf kecil. ';
                isValid = false;
            }
            if (!/[0-9]/.test(password)) {
                errorMessage += 'Harus mengandung angka. ';
                isValid = false;
            }

            if (isValid) {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
                errorElement.textContent = '';
            } else {
                input.classList.add('is-invalid');
                input.classList.remove('is-valid');
                errorElement.textContent = errorMessage.trim();
            }
        }
    }
});