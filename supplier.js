document.addEventListener("DOMContentLoaded", function () {
    // Handle navigation
    const menuLinks = document.querySelectorAll(".sidebar ul li a");
    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetPage = this.getAttribute("href");
            window.location.href = targetPage;
        });
    });

    // Handle logout button
    document.querySelector(".logout-btn").addEventListener("click", function () {
        alert("Logging out...");
        window.location.href = "login.html";
    });

    // Handle edit buttons
    const editButtons = document.querySelectorAll(".edit-btn");
    editButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Edit supplier functionality coming soon!");
        });
    });

    // Handle delete buttons
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach(button => {
        button.addEventListener("click", function () {
            const confirmed = confirm("Are you sure you want to delete this supplier?");
            if (confirmed) {
                this.parentElement.remove();
            }
        });
    });
});
