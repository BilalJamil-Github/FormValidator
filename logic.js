document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('subBtn');
    const nameInput = document.getElementById('Name');
    const nameError = document.getElementById('name_error');
    const emailInput = document.getElementById('Email');
    const emailError = document.getElementById('email_error');
    const phoneInput = document.getElementById('Phone');
    const phoneError = document.getElementById('phone_error');
    
    const forbiddenChars = /[0-9!@#$%^&*()]/;
    const emailPatterns = {
        mustHave: ['@', '.com'],
        domains: ['gmail', 'outlook', 'gmx']
    };

    submitBtn.addEventListener('click', () => {
        // Name Validation
        validateName(nameInput.value);

        // Email Validation
        validateEmail(emailInput.value);

        // Phone Validation
        validatePhone(phoneInput.value);
    });

    function validateName(name) {
        if (name.length > 10) {
            nameError.innerText = "Name is too long";
            nameError.style.color = 'red';
        } else if (name.length < 3) {
            nameError.innerText = "Name is too short";
            nameError.style.color = 'red';
        } else if (forbiddenChars.test(name)) {
            nameError.innerText = "Numbers and special characters are not allowed in name";
            nameError.style.color = 'red';
        } else {
            nameError.innerText = "Name is perfect";
            nameError.style.color = 'green';
            nameInput.disabled = true;
        }
    }

    function validateEmail(email) {
        let isValid = emailPatterns.mustHave.every(pattern => email.includes(pattern)) &&
                      emailPatterns.domains.some(domain => email.includes(domain));
        
        if (isValid) {
            emailError.innerText = "Your email is correct";
            emailError.style.color = 'green';
            emailInput.disabled = true;
        } else {
            emailError.innerText = "Your email is incorrect";
            emailError.style.color = 'red';
            emailInput.value = "";
        }
    }

    function validatePhone(phone) {
        if (phone.length !== 11) {
            phoneError.innerText = "Invalid phone number";
            phoneError.style.color = 'red';
        } else if (phone.startsWith("03")) {
            phoneError.innerText = "Valid phone number";
            phoneError.style.color = 'green';
        } else {
            phoneError.innerText = "Invalid phone number";
            phoneError.style.color = 'red';
        }
    }
});
