document.addEventListener('DOMContentLoaded', function () {
    const billTable = document.getElementById('billTable');
    const subtotalSpan = document.getElementById('subtotal');
    const taxAmountSpan = document.getElementById('taxAmount');
    const totalAmountSpan = document.getElementById('totalAmount');

    // Retrieve bill items from localStorage
    const billItems = JSON.parse(localStorage.getItem('billItems')) || [];
    let subtotal = 0;

    // Display bill items and calculate subtotal
    billItems.forEach(item => {
        const newRow = billTable.insertRow();
        newRow.innerHTML = `
            <td>${item.name}</td>
            <td>${item.id}</td>
            <td>${item.quantity}</td>
            <td>${item.expireDate}</td>
            <td>${item.price}</td>
        `;

        // Calculate subtotal
        const price = parseFloat(item.price.replace('$', ''));
        subtotal += price;
    });

    // Display subtotal
    subtotalSpan.innerText = `$${subtotal.toFixed(2)}`;
    totalAmountSpan.innerText = `$${subtotal.toFixed(2)}`;
});

// Apply tax to the subtotal
function applyTax() {
    const taxRate = parseFloat(document.getElementById('tax').value) || 0;
    const subtotal = parseFloat(document.getElementById('subtotal').innerText.replace('$', ''));
    const taxAmount = (subtotal * taxRate) / 100;
    const totalAmount = subtotal + taxAmount;

    document.getElementById('taxAmount').innerText = `$${taxAmount.toFixed(2)}`;
    document.getElementById('totalAmount').innerText = `$${totalAmount.toFixed(2)}`;
}

// Show QR code for BHIM Pay or GPay
function showQRCode(paymentMethod) {
    const qrCodeSection = document.getElementById('qrCodeSection');
    const qrCodeImage = document.getElementById('qrCodeImage');

    if (paymentMethod === 'BHIM Pay' || paymentMethod === 'GPay') {
        qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${paymentMethod}`;
        qrCodeSection.style.display = 'block';
    } else {
        qrCodeSection.style.display = 'none';
    }
}

// Process credit card payment
function processCreditCard() {
    alert('Processing Credit Card payment...');
}

// Print the bill
function printBill() {
    window.print();
}