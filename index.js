const tripKm = parseInt (prompt ('Inserisci il numero di Km di viaggio'));

if (isNan(tripKm)) {
    alert ('Valore inserito non valido');
} else {
    alert ('Hai inserito: ' + tripKm)
}
