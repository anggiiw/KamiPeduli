document.addEventListener('DOMContentLoaded', function() {
    const donationForm = document.getElementById('donationForm');
    if (donationForm) {
        const fullNameInput = document.getElementById('fullName');
        const emailInput = document.getElementById('email');
        const amountInput = document.getElementById('amount');

        donationForm.addEventListener('submit', function(event) {
            let formIsValid = true;

            validateFullName(fullNameInput);
            validateEmail(emailInput);
            validateAmount(amountInput);

            if (fullNameInput.classList.contains('is-invalid') ||
                emailInput.classList.contains('is-invalid') ||
                amountInput.classList.contains('is-invalid')) {
                formIsValid = false;
            }

            if (!formIsValid) {
                event.preventDefault();
                alert('Mohon periksa kembali inputan Anda. Ada kesalahan validasi.');
            } else {
                alert('Donasi Anda berhasil dikirim! Terima kasih atas kebaikan Anda.');
            }
        });

        fullNameInput.addEventListener('input', () => validateFullName(fullNameInput));
        emailInput.addEventListener('input', () => validateEmail(emailInput));
        amountInput.addEventListener('input', () => validateAmount(amountInput));

        function validateFullName(input) {
            const name = input.value.trim();
            const errorElement = document.getElementById('fullNameError');
            if (name.length < 5 || name.length > 20) {
                input.classList.add('is-invalid');
                input.classList.remove('is-valid');
                errorElement.textContent = 'Nama harus antara 5 hingga 20 karakter.';
            } else {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
                errorElement.textContent = '';
            }
        }

        function validateEmail(input) {
            const errorElement = document.getElementById('emailError');
            if (!input.checkValidity()) {
                input.classList.add('is-invalid');
                input.classList.remove('is-valid');
                errorElement.textContent = 'Masukkan format email yang valid.';
            } else {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
                errorElement.textContent = '';
            }
        }

        function validateAmount(input) {
            const amount = parseInt(input.value);
            const errorElement = document.getElementById('amountError');
            if (isNaN(amount) || amount < 10000) {
                input.classList.add('is-invalid');
                input.classList.remove('is-valid');
                errorElement.textContent = 'Jumlah donasi minimal Rp 10.000.';
            } else {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
                errorElement.textContent = '';
            }
        }
    }
});