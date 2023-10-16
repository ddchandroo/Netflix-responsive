// Function to validate email address
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

document.getElementById('email1').addEventListener('change', function () {
    const emailInput = document.getElementById('email1');
    const errorElement = document.getElementById('error1');
    const email = emailInput.value.trim();

    if (email === '') {
        errorElement.textContent = 'Email address cannot be empty';
        emailInput.style.border = "4px solid red"; 
    } else if (!validateEmail(email)) {
        errorElement.textContent = 'Invalid email address';
        emailInput.style.border = "4px solid red"; 
    } else {
        errorElement.textContent = '';
        emailInput.style.border = "6px solid green"; 
    }
});

document.getElementById('email2').addEventListener('change', function () {
    const emailInput = document.getElementById('email2');
    const errorElement = document.getElementById('error2');
    const email = emailInput.value.trim();

    if (email === '') {
        errorElement.textContent = 'Email address cannot be empty';
        emailInput.style.border = "4px solid red"; 
    } else if (!validateEmail(email)) {
        errorElement.textContent = 'Invalid email address';
        emailInput.style.border = "4px solid red"; 
    } else {
        errorElement.textContent = '';
        emailInput.style.border = "6px solid green"; 
    }
});