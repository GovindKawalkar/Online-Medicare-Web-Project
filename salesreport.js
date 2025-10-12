// salesreport.js
document.addEventListener("DOMContentLoaded", function () {
    const ctx1 = document.getElementById("salesPerMonth").getContext("2d");
    const ctx2 = document.getElementById("salesPerDrug").getContext("2d");

    new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["Jan-2020", "Feb-2020", "Mar-2020", "Apr-2020", "May-2020", "Jun-2020", "Jul-2020", "Aug-2020"],
            datasets: [{
                label: "Total Sales (Rs)",
                data: [9600, 15600, 9600, 15600, 22800, 6000, 7200, 261600],
                backgroundColor: "#4CAF50"
            }]
        }
    });

    new Chart(ctx2, {
        type: "bar",
        data: {
            labels: ["Citazin", "Panadol", "Metformin", "Salvitamol", "Amoxillin", "qwe", "jdkfsfh", "jkahsdf", "Diamicrozole"],
            datasets: [{
                label: "Number of drugs sold (Ratio)",
                data: [37, 30, 20, 12, 9, 5, 3, 2, 1],
                backgroundColor: "#4CAF50"
            }]
        }
    });
});
