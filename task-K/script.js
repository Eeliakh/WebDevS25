document.addEventListener('DOMContentLoaded', function() {

    // ===== BOOKING FORM VALIDATION =====
    const form = document.getElementById('rentalForm');
    const tableBody = document.querySelector('#bookingsTable tbody');

    if (!form || !tableBody) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let valid = true;

        const name = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const vehicle = document.getElementById('vehicle').value;
        const date = document.getElementById('date').value;
        const termsAccepted = document.getElementById('terms').checked;

        const nameError = document.getElementById('fullnameError');
        const emailError = document.getElementById('emailError');
        const vehicleError = document.getElementById('vehicleError');
        const dateError = document.getElementById('dateError');
        const termsError = document.getElementById('termsError');

        // Name
        if (!name) { nameError.style.display = 'block'; valid = false; } else { nameError.style.display = 'none'; }
        // Email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) { emailError.style.display = 'block'; valid = false; } else { emailError.style.display = 'none'; }
        // Vehicle
        if (!vehicle) { vehicleError.style.display = 'block'; valid = false; } else { vehicleError.style.display = 'none'; }
        // Date
        if (!date) { dateError.style.display = 'block'; valid = false; } else { dateError.style.display = 'none'; }
        // Terms
        if (!termsAccepted) { termsError.style.display = 'block'; valid = false; } else { termsError.style.display = 'none'; }

        if (!valid) return; // stop if invalid

        // Remove placeholder row
        const placeholder = document.querySelector('.placeholder-row');
        if (placeholder) placeholder.remove();

        // Add booking row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${new Date().toLocaleString()}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${vehicle}</td>
            <td>${date}</td>
            <td>${termsAccepted ? 'Yes' : 'No'}</td>
        `;
        tableBody.appendChild(newRow);

        form.reset();
    });

});
