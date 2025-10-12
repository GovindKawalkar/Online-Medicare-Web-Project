document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Here you can add validation if needed

    // Redirect to dashboard.html
    window.location.href = 'dashboard.html';
});