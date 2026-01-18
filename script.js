document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    // demo credentials (you can change)
    if (username === "admin" && password === "admin123") {
        window.location.href = "dashboard.html";
    } else {
        message.style.color = "red";
        message.innerText = "Invalid username or password";
    }
});
