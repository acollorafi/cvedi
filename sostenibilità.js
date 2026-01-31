// Gestione slider fasi con loop e transizioni
document.addEventListener('DOMContentLoaded', () => {
    const fasi = document.querySelectorAll('.fase-item');
    const prevButton = document.querySelector('.prev-fase');
    const nextButton = document.querySelector('.next-fase');
    let currentIndex = 0;

    if (!fasi.length || !prevButton || !nextButton) return;

    function showFase(index) {
        fasi.forEach((fase, i) => {
            if (i === index) {
                fase.classList.add('active');
                // Forza reflow per attivare animazione
                fase.offsetHeight;
            } else {
                fase.classList.remove('active');
            }
        });
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % fasi.length; // Loop infinito
        showFase(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + fasi.length) % fasi.length; // Loop infinito all'indietro
        showFase(currentIndex);
    });

    // Inizializza
    showFase(currentIndex);
});

// Animazione foglia
document.addEventListener('DOMContentLoaded', () => {
    const foglia = document.querySelector('.image-right');
    if (!foglia) return;

    let start = null;

    function ventoLeggero(timestamp) {
        if (!start) start = timestamp;
        const elapsed = (timestamp - start) / 1000;

        const x = Math.sin(elapsed * 0.5) * 2;
        const y = Math.sin(elapsed * 0.3) * 3;
        const rotation = Math.sin(elapsed * 0.6) * 1;

        foglia.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;

        requestAnimationFrame(ventoLeggero);
    }

    requestAnimationFrame(ventoLeggero);
});

// Carosello Esperti (solo mobile)
document.addEventListener('DOMContentLoaded', function() {
    const expertItems = document.querySelectorAll('.expert-item');
    const prevBtn = document.querySelector('.prev-expert');
    const nextBtn = document.querySelector('.next-expert');
    let currentExpertIndex = 0;

    function isMobile() {
        return window.innerWidth < 768;
    }

    function showExpert(index) {
        if (!isMobile()) return;
        
        expertItems.forEach(item => item.classList.remove('active'));
        expertItems[index].classList.add('active');
    }

    function initExpertsCarousel() {
        if (isMobile()) {
            showExpert(0);
        } else {
            expertItems.forEach(item => item.classList.remove('active'));
        }
    }

    if (prevBtn && nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (!isMobile()) return;
            currentExpertIndex = (currentExpertIndex + 1) % expertItems.length;
            showExpert(currentExpertIndex);
        });

        prevBtn.addEventListener('click', function() {
            if (!isMobile()) return;
            currentExpertIndex = (currentExpertIndex - 1 + expertItems.length) % expertItems.length;
            showExpert(currentExpertIndex);
        });
    }

    // Inizializza al caricamento
    initExpertsCarousel();

    // Reinizializza al resize
    window.addEventListener('resize', initExpertsCarousel);
});