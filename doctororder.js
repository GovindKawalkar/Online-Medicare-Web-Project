document.addEventListener('DOMContentLoaded', function() {
    const ordersList = document.getElementById('ordersList');
    const orders = [
        {
            doctorName: "Lalana Thanthirgama",
            doctorContact: "0716189361",
            doctorID: "9182739182V",
            doctorEmail: "doctor123@gmail.com",
            drugNames: ["Panadol", "Amoxillin", "Chloroperi Hybanate"],
            drugPrices: [1200, 1200, 1200],
            quantities: [3, 3, 2],
            total: 9600,
            pickupDate: "2020-08-22",
            status: "New"
        },
        {
            doctorName: "Lorloru Gupta",
            doctorContact: "0716189361",
            doctorID: "9182739182V",
            doctorEmail: "doctor123@gmail.com",
            drugNames: ["Panadol", "Citazin", "Metformin"],
            drugPrices: [1200, 1200, 1200],
            quantities: [12, 12, 3],
            total: 32400,
            pickupDate: "2020-08-24",
            status: "Verified"
        },
        {
            doctorName: "Lalilana Sharma",
            doctorContact: "0716189361",
            doctorID: "9182739182V",
            doctorEmail: "doctor123@gmail.com",
            drugNames: ["Panadol", "Citazin", "Metformin"],
            drugPrices: [1200, 1200, 1200],
            quantities: [12, 13, 12],
            total: 44400,
            pickupDate: "2020-08-22",
            status: "Pickup"
        }
    ];

    function displayOrders(filter) {
        ordersList.innerHTML = '';
        const filteredOrders = filter ? orders.filter(order => order.status === filter) : orders;
        filteredOrders.forEach(order => {
            const orderDiv = document.createElement('div');
            orderDiv.className = 'order';
            orderDiv.innerHTML = `
                <p><strong>Doctor Name:</strong> ${order.doctorName}</p>
                <p><strong>Doctor Contact:</strong> ${order.doctorContact}</p>
                <p><strong>Doctor ID:</strong> ${order.doctorID}</p>
                <p><strong>Doctor Email:</strong> ${order.doctorEmail}</p>
                <p><strong>Drug Names:</strong> ${order.drugNames.join(', ')}</p>
                <p><strong>Drug Prices:</strong> ${order.drugPrices.join(', ')}</p>
                <p><strong>Quantities:</strong> ${order.quantities.join(', ')}</p>
                <p><strong>Total:</strong> ${order.total}</p>
                <p><strong>Pickup Date:</strong> ${order.pickupDate}</p>
                <p><strong>Status:</strong> ${order.status}</p>
            `;
            ordersList.appendChild(orderDiv);
        });
    }

    document.getElementById('newOrder').addEventListener('click', () => displayOrders('New'));
    document.getElementById('verifiedOrder').addEventListener('click', () => displayOrders('Verified'));
    document.getElementById('pickupOrder').addEventListener('click', () => displayOrders('Pickup'));

    displayOrders(); // Display all orders initially
});