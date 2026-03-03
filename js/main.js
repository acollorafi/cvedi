document.addEventListener('DOMContentLoaded', () => {

    // mappa dei tavoli
    window.mostraTavoli = function() {
        const persone = document.querySelector('.search-bar-custom input[type="number"]').value;
        const data = document.getElementById('dateInput').value;
        const orario = document.querySelector('.glass-effect-select').value;
        const sezioneMappa = document.getElementById('mappa-tavoli');
        console.log("Tentativo di ricerca:", { persone, data, orario });
        if (!data) {
            alert("Per favore, seleziona una data per la tua prenotazione.");
            return;
        }
        if (sezioneMappa) {
            sezioneMappa.classList.remove('d-none');
                setTimeout(() => {
                sezioneMappa.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

    // data
    window.updateLabel = function(input, textId) {
        const displaySpan = document.getElementById(textId);
        if (input.value && displaySpan) {
            const dateObj = new Date(input.value);
            const formattedDate = dateObj.toLocaleDateString('it-IT');
            
            displaySpan.innerText = formattedDate;
            displaySpan.style.color = "var(--bs-white)";
            displaySpan.style.fontWeight = "bold";
        }
    };

    // pop-up di conferma finale
    const btnConferma = document.getElementById('btnConfermaPrenotazione');
    if (btnConferma) {
        btnConferma.addEventListener('click', () => {
            const overlay = document.getElementById('modalOverlay');
            if (overlay) {
                overlay.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    }
});

//pop up prenota
window.chiudiPopUp = function() {
    const overlay = document.getElementById('modalOverlay');
    if (overlay) {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    }
};

function chiudiPopUp() {
    const overlay = document.getElementById('modalOverlay');
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto'; 
    }

//movimento foglie
document.addEventListener("DOMContentLoaded", () => {
  const leaves = document.querySelectorAll(".leaf");
  if (!leaves.length) return;

  let wind = 0;
  let lastScrollY = window.scrollY;
  let ticking = false;
  let rafId = null;

  window.addEventListener(
    "scroll",
    () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      wind += delta * 0.3;
      wind = Math.max(Math.min(wind, 20), -20);

      if (!ticking) {
        ticking = true;
        rafId = requestAnimationFrame(animate);
      }
    },
    { passive: true }
  );

  function animate() {
    wind *= 0.92;

    const time = performance.now();

    leaves.forEach((leaf, i) => {
      const direction = leaf.closest(".leaves-right") ? -1 : 1;

      const swayX =
        Math.sin(time * 0.002 + i) * wind * 0.4 * direction;

      const swayRot =
        Math.sin(time * 0.0015 + i) * wind * 0.3 * direction;

      leaf.style.transform = `
        translateX(${swayX}px)
        rotate(${swayRot}deg)
      `;
    });

    if (Math.abs(wind) > 0.1) {
      rafId = requestAnimationFrame(animate);
    } else {
      ticking = false;
      cancelAnimationFrame(rafId);
    }
  }
});


// PAGINA MENU.HTML
// tab menu intolleranze

document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".btn-menu");
    const cards = document.querySelectorAll("[data-menu]");
    const activeMenu = document.querySelector(".btn-menu.active").dataset.menuBtn;

    cards.forEach(card => {
        if (card.dataset.menu !== activeMenu) {
            card.classList.add("menu-hidden");
        }
    });

    buttons.forEach(button => {
        button.addEventListener("click", function () {

            // bottone attivo
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const selectedMenu = this.dataset.menuBtn;

            // filtra card
            cards.forEach(card => {
                if (card.dataset.menu === selectedMenu) {
                    card.classList.remove("menu-hidden");
                } else {
                    card.classList.add("menu-hidden");
                }
            });
        });
    });

});


/********************************************
           PAGINA sostenibilità
********************************************/
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
              fase.offsetHeight;
          } else {
              fase.classList.remove('active');
          }
      });
  }

  nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % fasi.length;
      showFase(currentIndex);
  });

  prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + fasi.length) % fasi.length;
      showFase(currentIndex);
  });

  showFase(currentIndex);
});

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

// carosello esperti (solo mobile)
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
  initExpertsCarousel();
  window.addEventListener('resize', initExpertsCarousel);
});
