document.addEventListener('DOMContentLoaded', function () {
    const addToBillButtons = document.querySelectorAll('.addToBill');
    const billTable = document.getElementById('billTable');
    const totalAmountSpan = document.getElementById('totalAmount');
    const checkoutBtn = document.getElementById('checkoutBtn');
    let totalAmount = 0;

    // Add items to the bill
    addToBillButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productCard = button.closest('.product-card');
            const productName = productCard.getAttribute('data-name');
            const productPrice = parseFloat(productCard.getAttribute('data-price'));
            const quantity = parseFloat(productCard.querySelector('.quantity').value);

            const totalPrice = productPrice * quantity;

            // Add row to the bill table
            const newRow = billTable.insertRow();
            newRow.innerHTML = `
                <td>${productName}</td>
                <td>${Math.floor(Math.random() * 100000)}</td>
                <td>${quantity}</td>
                <td>2023-12-31</td>
                <td>$${totalPrice.toFixed(2)}</td>
                <td><button onclick="removeRow(this)">Remove</button></td>
            `;

            // Update total amount
            totalAmount += totalPrice;
            totalAmountSpan.innerText = `$${totalAmount.toFixed(2)}`;
        });
    });

    // Remove row from the bill table
    window.removeRow = function (button) {
        const row = button.closest('tr');
        const price = parseFloat(row.cells[4].innerText.replace('$', ''));
        totalAmount -= price;
        totalAmountSpan.innerText = `$${totalAmount.toFixed(2)}`;
        row.remove();
    };

    // Redirect to bill.html on checkout
    checkoutBtn.addEventListener('click', function () {
        const billItems = [];
        const rows = billTable.querySelectorAll('tr');
        rows.forEach((row, index) => {
            if (index > 0) { // Skip header row
                const item = {
                    name: row.cells[0].innerText,
                    id: row.cells[1].innerText,
                    quantity: row.cells[2].innerText,
                    expireDate: row.cells[3].innerText,
                    price: row.cells[4].innerText,
                };
                billItems.push(item);
            }
        });

        // Store bill items in localStorage
        localStorage.setItem('billItems', JSON.stringify(billItems));
        localStorage.setItem('totalAmount', totalAmount.toFixed(2));

        // Redirect to bill.html
        window.location.href = 'bill.html';
    });
});