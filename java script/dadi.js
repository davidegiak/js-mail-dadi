// Genera due numeri random tra 1 e 6 (inclusi), uno per il giocatore e uno per il computer.
// Stabilisci il vincitore, in base a chi ha ottenuto il punteggio più alto.

// genera un numero random da 1 a 6
let dadone = Math.floor(Math.random() * 10) + 1;
let dado = Math.floor(Math.random() * 10) + 1;
console.log (dado, dadone);

// stabilisci il vincitore in base al numero più alto
if (dado > dadone) {
    alert ("Hai vinto");
}
else {
    alert ("Hai Perso")
}