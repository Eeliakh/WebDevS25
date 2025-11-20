const buttons = document.querySelectorAll('.brand-btn');
const infos = document.querySelectorAll('.brand-info');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        infos.forEach(info => info.classList.remove('active'));
        document.getElementById(btn.id.replace('brand-', '') + '-info').classList.add('active');
    });
});

const form = document.getElementById('rentalForm');
const tableBody = document.querySelector('#bookingsTable tbody');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const vehicle = document.getElementById('vehicle').value;
    const date = document.getElementById('date').value;
    const termsAccepted = document.getElementById('terms').checked;

    document.getElementById('fullnameError').style.display = name ? 'none' : 'block';
    if (!name) valid = false;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    document.getElementById('emailError').style.display = emailPattern.test(email) ? 'none' : 'block';
    if (!emailPattern.test(email)) valid = false;

    document.getElementById('vehicleError').style.display = vehicle ? 'none' : 'block';
    if (!vehicle) valid = false;

    document.getElementById('dateError').style.display = date ? 'none' : 'block';
    if (!date) valid = false;

    document.getElementById('termsError').style.display = termsAccepted ? 'none' : 'block';
    if (!termsAccepted) valid = false;

    if (!valid) return;

    const placeholder = document.querySelector('.placeholder-row');
    if (placeholder) placeholder.remove();

    const newRow = document.createElement('tr');
    newRow.style.opacity = 0;
    newRow.innerHTML = `
        <td>${new Date().toLocaleString()}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${vehicle}</td>
        <td>${date}</td>
        <td>${termsAccepted ? 'Yes' : 'No'}</td>
    `;
    tableBody.appendChild(newRow);

    setTimeout(() => {
        newRow.style.transition = 'opacity 0.5s ease';
        newRow.style.opacity = 1;
    }, 50);

    form.reset();
});

