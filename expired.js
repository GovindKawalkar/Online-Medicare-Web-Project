document.getElementById('showExpired').addEventListener('click', function() {
    displayDrugsInfo([
        {
            supplierEmail: "chamika14@gmail.com",
            drugName: "Panadol",
            quantity: 2960,
            batchID: "123213N",
            expireDate: "Thu Aug 20 2020 05:30:00 GMT+0530 (India Standard Time)",
            price: 1200
        },
        {
            supplierEmail: "cha12@gmail.com",
            drugName: "Citazin",
            quantity: 148,
            batchID: "10298239N",
            expireDate: "Tue Aug 18 2020 05:30:00 GMT+0530 (India Standard Time)",
            price: 1200
        },
        {
            supplierEmail: "supplier3@gmail.com",
            drugName: "Aspirin",
            quantity: 500,
            batchID: "456789N",
            expireDate: "Wed Aug 19 2020 05:30:00 GMT+0530 (India Standard Time)",
            price: 800
        }
    ]);
});

document.getElementById('showAboutToExpire').addEventListener('click', function() {
    displayDrugsInfo([
        {
            supplierEmail: "lalana0@gmail.com",
            drugName: "Metformin",
            quantity: 9791,
            batchID: "1298319N",
            expireDate: "Thu Aug 20 2020 05:30:00 GMT+0530 (India Standard Time)",
            price: 1200
        },
        {
            supplierEmail: "Lalacha12@gmail.com",
            drugName: "Chloropent Hybanate",
            quantity: 3423,
            batchID: "854564665B",
            expireDate: "Mon Aug 10 2020 05:30:00 GMT+0530 (India Standard Time)",
            price: 1200
        },
        {
            supplierEmail: "supplier4@gmail.com",
            drugName: "Ibuprofen",
            quantity: 2000,
            batchID: "987654N",
            expireDate: "Fri Aug 21 2020 05:30:00 GMT+0530 (India Standard Time)",
            price: 900
        },
        {
            supplierEmail: "supplier5@gmail.com",
            drugName: "Paracetamol",
            quantity: 1500,
            batchID: "123456N",
            expireDate: "Sat Aug 22 2020 05:30:00 GMT+0530 (India Standard Time)",
            price: 700
        }
    ]);
});

function displayDrugsInfo(drugs) {
    const drugInfoSection = document.getElementById('drugInfo');
    drugInfoSection.innerHTML = '<h2>Drug Information</h2>';
    drugs.forEach(drug => {
        drugInfoSection.innerHTML += `
            <div>
                <p><strong>Supplier's Email:</strong> ${drug.supplierEmail}</p>
                <p><strong>Drug Name:</strong> ${drug.drugName}</p>
                <p><strong>Quantity:</strong> ${drug.quantity}</p>
                <p><strong>Batch ID:</strong> ${drug.batchID}</p>
                <p><strong>Expire Date:</strong> ${drug.expireDate}</p>
                <p><strong>Price:</strong> ${drug.price}</p>
                <hr>
            </div>
        `;
    });
}