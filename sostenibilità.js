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

<script>
document.addEventListener("DOMContentLoaded", () => {
  const foglia = document.querySelector(".image-right");
  if (!foglia) return;

  let start = null;

  function ventoLeggero(ts) {
    if (!start) start = ts;
    const t = (ts - start) / 1000;

    // movimento MINIMO
    const x = Math.sin(t * 0.5) * 10;
    const y = Math.sin(t * 0.3) * 10;
    const r = Math.sin(t * 0.6) * 10;

    foglia.style.transform =
      `translate(${x}px, ${y}px) rotate(${r}deg)`;

    requestAnimationFrame(ventoLeggero);
  }

  requestAnimationFrame(ventoLeggero);
});
</script>