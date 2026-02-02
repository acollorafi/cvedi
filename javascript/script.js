document.addEventListener('DOMContentLoaded', () => {

    // 1. Funzione per mostrare la mappa dei tavoli
    window.mostraTavoli = function() {
        // Recupero numero persone (l'unico input number nella barra)
        const persone = document.querySelector('.search-bar-custom input[type="number"]').value;
        
        // Recupero data tramite ID
        const data = document.getElementById('dateInput').value;
        
        // Recupero orario tramite la classe della SELECT
        const orario = document.querySelector('.glass-effect-select').value;
        
        const sezioneMappa = document.getElementById('mappa-tavoli');

        // Debug per controllare i valori in console
        console.log("Tentativo di ricerca:", { persone, data, orario });

        // Controllo validità: persone è sempre valorizzato (default 2), controlliamo data
        if (!data) {
            alert("Per favore, seleziona una data per la tua prenotazione.");
            return;
        }

        // Se la data c'è, mostriamo la sezione mappa
        if (sezioneMappa) {
            sezioneMappa.classList.remove('d-none');
            
            // Scroll fluido verso la sezione mappa
            setTimeout(() => {
                sezioneMappa.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

    // 2. Funzione per aggiornare il testo della data (perché l'input è nascosto)
    window.updateLabel = function(input, textId) {
        const displaySpan = document.getElementById(textId);
        if (input.value && displaySpan) {
            // Formattiamo la data in formato italiano GG/MM/AAAA
            const dateObj = new Date(input.value);
            const formattedDate = dateObj.toLocaleDateString('it-IT');
            
            displaySpan.innerText = formattedDate;
            displaySpan.style.color = "var(--bs-white)";
            displaySpan.style.fontWeight = "bold";
        }
    };

    // 3. Gestione del Pop-up di conferma finale
    const btnConferma = document.getElementById('btnConfermaPrenotazione');
    if (btnConferma) {
        btnConferma.addEventListener('click', () => {
            const overlay = document.getElementById('modalOverlay');
            if (overlay) {
                overlay.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // Blocca lo scroll
            }
        });
    }
});

//pop up prenota
window.chiudiPopUp = function() {
    const overlay = document.getElementById('modalOverlay');
    if (overlay) {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // Riabilita lo scroll
    }
};

function chiudiPopUp() {
    const overlay = document.getElementById('modalOverlay');
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto'; // Riabilita lo scroll
    
    // Opzionale: ricarica la pagina o torna in cima
    // window.location.reload(); 
}

//prova foglie
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

      // avvia animazione solo se non è già attiva
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

    // se il vento è ancora percepibile → continua
    if (Math.abs(wind) > 0.1) {
      rafId = requestAnimationFrame(animate);
    } else {
      ticking = false;
      cancelAnimationFrame(rafId);
    }
  }
});

  
    

//prova foglie home



// PAGINA MENU.HTML
// tab menu intolleranze

document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".btn-menu");
    const cards = document.querySelectorAll("[data-menu]");

    // stato iniziale (menu attivo)
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
