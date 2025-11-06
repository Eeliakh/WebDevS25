// index.js
// Author: Eeli Östberg
// Date: 2025-11-06

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('addCourseForm');
  const tbody = document.querySelector('#timetable tbody');

  const fields = {
    fullname: document.getElementById('fullname'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    birthdate: document.getElementById('birthdate'),
    acceptedTerms: document.getElementById('acceptedTerms'),
  };

  const errors = {
    fullname: document.getElementById('fullnameError'),
    email: document.getElementById('emailError'),
    phone: document.getElementById('phoneError'),
    birthdate: document.getElementById('birthdateError'),
    acceptedTerms: document.getElementById('acceptedTermsError'),
  };

  function clearErrors() {
    Object.values(errors).forEach(errorElem => {
      errorElem.textContent = '';
    });
    }

    function validate() {
        clearErrors();
        let Valid = true;

        // Full name validation
        if (fields.fullname.value.trim() === '') {
            errors.fullname.textContent = 'Full name is required.';
            Valid = false;
        }
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(fields.email.value.trim())) {
            errors.email.textContent = 'Please enter a valid email address.';
            Valid = false;
        }
        // Phone number validation
        const phonePattern = /^\+?\d{7,15}$/;
        if (!phonePattern.test(fields.phone.value.trim())) {
            errors.phone.textContent = 'Please enter a valid phone number.';
            Valid = false;
        }
        // Birthdate validation
        if (fields.birthdate.value === '') {
            errors.birthdate.textContent = 'Birth date is required.';
            Valid = false;
        }
        // Accepted terms validation
        if (!fields.acceptedTerms.checked) {
            errors.acceptedTerms.textContent = 'You must accept the terms.';
            Valid = false;
        }   
        return Valid;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validate()) return;

    //fill timestamp
    const timestamp = new Date().toLocaleString();
    document.getElementById('timestamp').value = timestamp;

    // Create new table row
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${timestamp}</td>
      <td>${fields.fullname.value.trim()}</td>
        <td>${fields.email.value.trim()}</td>
        <td>${fields.phone.value.trim()}</td>
        <td>${fields.birthdate.value}</td>
        <td>${fields.acceptedTerms.checked ? 'Yes' : 'No'}</td>
    `;
    table.appendChild(row);

    // Reset form
    form.reset();
  });
});
