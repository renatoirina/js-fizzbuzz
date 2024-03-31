# FizzBuzz Challenge

Questo programma JavaScript stampa i numeri da 1 a 100 nella console, sostituendo determinati numeri con le stringhe "Fizz", "Buzz", o "FizzBuzz" secondo determinate regole.


## Descrizione

Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


## Bonus

- [x] Crea un container nel DOM, aggiungendo un elemento HTML con il numero o la stringa corretta da mostrare.
- [x] Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.


### Passaggi del programma

1. **Ascoltatore di eventi:** Il programma attende il caricamento completo del DOM.
2. **Creazione del container:** Viene creato un riferimento al container nel DOM dove verranno aggiunti gli elementi.
3. **Iterazione da 1 a 100:** Il programma itera attraverso i numeri da 1 a 100.
4. **Controllo dei multipli:** Per ogni numero, il programma controlla se è multiplo di 3, di 5, o di entrambi.
5. **Generazione del valore:** In base ai controlli effettuati, il programma genera la stringa corretta da visualizzare.
6. **Aggiunta di classi CSS:** Vengono aggiunte classi CSS agli elementi in base alla stringa generata.
7. **Creazione e aggiunta degli elementi al container:** Vengono creati gli elementi div contenenti i valori e le classi corrispondenti, quindi vengono aggiunti al container nel DOM.


### HTML e CSS
- [x] creare un container dove poter aggiugere gli elementi con il numero o la stringa corretta
- [x] aggiungere del CSS