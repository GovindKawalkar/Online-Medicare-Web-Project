// Function to show messages
function showMessage(message) {
    alert(message);
}

// Chart.js for Sales and Revenue Charts
document.addEventListener('DOMContentLoaded', function () {
    const salesChartCtx = document.getElementById('salesChart').getContext('2d');
    const revenueChartCtx = document.getElementById('revenueChart').getContext('2d');

    new Chart(salesChartCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55],
                borderColor: '#007bff',
                fill: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });

    new Chart(revenueChartCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Revenue',
                data: [12000, 19000, 3000, 5000, 2000, 3000],
                backgroundColor: '#28a745',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });
});