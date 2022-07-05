const costoPerkm = 0.21 ;

const FirstAndSecondName = (prompt ('Inserisci tuo Nome e Cognome')) ;
const quantitaKm = parseInt (prompt ('Inserisci il numero di Km di viaggio'));
const eta = parseInt (prompt ('Inserisci la tua età'));

let prezzo = costoPerkm * quantitaKm;
let messaggio = '';

if (eta < 18) {
    prezzo -= prezzo / 100 * 20 ;
    messaggio ='Il prezzo del biglietto è scontato del 20% . Il prezzo finale è ' + prezzo.toFixed(2) + 'euro';

} else if (eta > 65) {
    prezzo -= prezzo / 100 * 40 ;
    messaggio ='Il prezzo del biglietto è scontato del 40% . Il prezzo finale è ' + prezzo.toFixed(2) + 'euro';
} else {
    messaggio = 'Il prezzo del biglietto è ' + prezzo.toFixed(2) + 'euro';
}





alert (messaggio);





