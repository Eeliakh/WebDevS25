// index.js
// Author: Eeli Östberg
// Date: 2025-11-13

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('addCourseForm');
  const tbody = document.querySelector('#timetable tbody');

  const fields = {
    fullname: document.getElementById('fullname'),
    email: document.getElementById('Email'),
    phone: document.getElementById('Number'),
    birthdate: document.getElementById('birthdate'),
    acceptedTerms: document.getElementById('terms'),
  };

  const table = document.getElementById('timetable');

  const errors = {
    fullname: document.getElementById('fullnameError'),
    email: document.getElementById('emailError'),
    phone: document.getElementById('phoneError'),
    birthdate: document.getElementById('birthdateError'),
    acceptedTerms: document.getElementById('termsError'),
  };

  function clearErrors() {
    Object.values(errors).forEach(errorElement => {
      errorElement.textContent = '';
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

    const timestamp = new Date().toLocaleString();
    const tbody = table.querySelector('tbody');

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${timestamp}</td>
      <td>${fields.fullname.value.trim()}</td>
      <td>${fields.email.value.trim()}</td>
      <td>${fields.phone.value.trim()}</td>
      <td>${fields.birthdate.value}</td>
      <td>${fields.acceptedTerms.checked ? 'Yes' : 'No'}</td>
    `;

    tbody.appendChild(row);

    form.reset();
    clearErrors();
  });
});
