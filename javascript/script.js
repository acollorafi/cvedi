document.addEventListener('DOMContentLoaded', () => {
    // La tua funzione originale migliorata
    window.updateLabel = function(input, textId) {
        const displaySpan = document.getElementById(textId);
        
        if (input.value) {
            let val = input.value;

            // Se è una data (AAAA-MM-GG), la formattiamo in GG/MM/AAAA
            if (input.type === 'date') {
                const dateParts = val.split('-');
                val = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
            }

            displaySpan.innerText = val;
            displaySpan.style.color = "var(--bs-white)";
            displaySpan.style.fontWeight = "bold";
        }
    };
});

function mostraTavoli() {
    // 1. Recuperiamo i valori degli input
    const persone = document.querySelector('.search-input').value; // Input persone
    const data = document.getElementById('dateInput').value;      // Input data
    const orario = document.getElementById('timeInput').value;    // Input orario
    const sezioneMappa = document.getElementById('mappa-tavoli');

    // 2. Controllo validità: se uno dei campi è vuoto, avvisiamo l'utente
    if (!persone || !data || !orario) {
        alert("Per favore, compila tutti i campi (Persone, Data e Orario) prima di cercare.");
        return; // Interrompe la funzione
    }

    // 3. Rimuoviamo la classe 'd-none' di Bootstrap per mostrare la sezione
    sezioneMappa.classList.remove('d-none');

    // 4. (Opzionale) Scroll automatico verso la mappa
    sezioneMappa.scrollIntoView({ behavior: 'smooth' });
}