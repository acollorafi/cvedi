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

// Funzione globale per chiudere il pop-up (richiamata dal tasto "Ottimo!" della modale)
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

// //prova foglie
document.addEventListener("DOMContentLoaded", () => {
    const leaves = document.querySelectorAll(".leaf");
    if (!leaves.length) return;
  
    let wind = 0;
    let lastScrollY = window.scrollY;
  
    window.addEventListener("scroll", () => {
      const delta = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
  
      // accumula vento (questa è la chiave)
      wind += delta * 0.3;
  
      // limite massimo
      wind = Math.max(Math.min(wind, 20), -20);
    });
  
    function animate() {
      // inerzia / smorzamento
      wind *= 0.95;
  
      leaves.forEach((leaf, i) => {
        const direction = leaf.closest(".leaves-right") ? -1 : 1;
  
        const swayX =
          Math.sin(Date.now() * 0.002 + i) *
          wind *
          0.4 *
          direction;
  
        const swayRot =
          Math.sin(Date.now() * 0.0015 + i) *
          wind *
          0.3 *
          direction;
  
        leaf.style.transform = `
          translateX(${swayX}px)
          rotate(${swayRot}deg)
        `;
      });
  
      requestAnimationFrame(animate);
    }
  
    animate();
  });
  
  
    

//prova foglie home
