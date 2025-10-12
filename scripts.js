function validateLogin() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let emailError = document.getElementById('emailError');
    
    if (!email.includes('@')) {
        emailError.style.display = 'block';
        return;
    } else {
        emailError.style.display = 'none';
    }
    if (email && password) {
        window.location.href = 'dashboard.html';
    } else {
        alert('Please enter valid credentials');
    }
}

document.getElementById('signupButton').addEventListener('click', function() {
    window.location.href = 'signup.html';
});