function saveProfileChanges() {
    const name = document.getElementById('name').value;
    const profilePicture = document.getElementById('profile-picture').files[0];

    if (profilePicture) {
        console.log('Profile Picture Uploaded:', profilePicture.name);
    }
    if (name) {
        console.log('Name Updated:', name);
    }
    alert('Profile changes saved!');
}

function addPharmacyUser() {
    const userName = document.getElementById('user-name').value;
    const userRole = document.getElementById('user-role').value;
    const userContact = document.getElementById('user-contact').value;
    const userNIC = document.getElementById('user-nic').value;
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;

    if (userName && userRole && userContact && userNIC && userEmail && userPassword) {
        console.log('New Pharmacy User Added:', {
            userName,
            userRole,
            userContact,
            userNIC,
            userEmail,
            userPassword
        });
        alert('Pharmacy user added successfully!');
    } else {
        alert('Please fill all fields!');
    }
}

function addDoctorAccount() {
    const doctorName = document.getElementById('doctor-name').value;
    const doctorContact = document.getElementById('doctor-contact').value;
    const doctorSLMC = document.getElementById('doctor-slmc').value;
    const doctorEmail = document.getElementById('doctor-email').value;
    const doctorPassword = document.getElementById('doctor-password').value;

    if (doctorName && doctorContact && doctorSLMC && doctorEmail && doctorPassword) {
        console.log('New Doctor Account Added:', {
            doctorName,
            doctorContact,
            doctorSLMC,
            doctorEmail,
            doctorPassword
        });
        alert('Doctor account added successfully!');
    } else {
        alert('Please fill all fields!');
    }
}