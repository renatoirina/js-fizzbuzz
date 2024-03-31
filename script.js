// Ascoltatore di eventi che attende il caricamento completo del DOM
document.addEventListener('DOMContentLoaded', function() {
    // Riferimento al container nel DOM
    const container = document.getElementById('fizzbuzz-container');

    // Ciclo da 1 a 100 per controllare i multipli di 3 e 5
    for (let i = 1; i <= 100; i++) {
        let valore = '';
        let classe = '';
        // Controllo se il numero è multiplo di 3
        if (i % 3 === 0) {
            valore += 'Fizz';
            classe += 'fizz';
        }
        // Controllo se il numero è multiplo di 5
        if (i % 5 === 0) {
            valore += 'Buzz';
            classe += (classe ? 'buzz' : 'buzz'); // Aggiunge 'buzz' indipendentemente da 'fizz'
        }
        // Se il numero è sia multiplo di 3 che di 5, aggiungi la classe 'fizzbuzz'
        if (i % 3 === 0 && i % 5 === 0) {
            classe = 'fizzbuzz';
        }
        // Se non è né Fizz né Buzz, usiamo il numero
        valore = valore || i.toString();
        classe = classe || 'numero';

        // Creazione dell'elemento div e aggiunta al container
        const elemento = document.createElement('div');
        elemento.textContent = valore;
        elemento.className = 'fizzbuzz-item ' + classe;
        container.appendChild(elemento);
    }
});
