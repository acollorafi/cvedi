const fasi = document.querySelectorAll('.fase-wrapper .row.g-0');
let currentIndex = 0;

fasi.forEach((fase, i) => {
    fase.classList.toggle('active', i === currentIndex);
});

const prevButton = document.querySelector('.fase-nav.prev-fase');
const nextButton = document.querySelector('.fase-nav.next-fase');

function showFase(index) {
    fasi.forEach((fase, i) => {
        fase.classList.toggle('active', i === index);
    });
}

nextButton.addEventListener('click', () => {
    if (currentIndex < fasi.length - 1) {
        currentIndex++;
        showFase(currentIndex);
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showFase(currentIndex);
    }
});

