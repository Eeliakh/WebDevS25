const vehicleCards = document.querySelectorAll('.vehicle-card');

const model = document.createElement('div');
model.id = 'vehicleModel';
model.innerHTML = `
    <div class="model-content">
        <span class="close-btn">&times;</span>
        <div class="model-body"></div>
    </div>
`;
document.body.appendChild(model);

const modelBody = model.querySelector('.model-body');
const closeBtn = model.querySelector('.close-btn');


model.style.display = 'none';


vehicleCards.forEach(card => {
    card.addEventListener('click', () => {
        modelBody.innerHTML = card.innerHTML; 
        model.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    model.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === model) {
        model.style.display = 'none';
    }
});
