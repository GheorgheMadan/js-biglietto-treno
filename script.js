// Biglietto del treno

const costoPerkm = 0.20;
const sconto20 = 0.20;
const sconto40 = 0.40;
// INPUT dei km che il cliente vuole percorrere
let km = parseInt(prompt("Inserisci i kilometri da percorrere:"))
// Validazione, controllo se l'utente ha inserito corettamente i dati 
if (isNaN(km) || km <= 50) {
    alert("Per favore, inserisci un numero valido di kilometri")
} else {
    // il PC  calcola quanto spenderà in base ai km che l'utente farà
    let costoTotale = km * costoPerkm
    console.log(costoTotale)
    // INPUT dell'età del cliente
    let eta = parseInt(prompt("Inserisci i l'età: "))
        // SE ha meno di 18 anni
        if (eta < 18) {
            // allora avrà uno sconto del 20%
            let scontoMinorenne = costoTotale * sconto20
            let prezzoScontatoMinore = costoTotale - scontoMinorenne
            console.log(prezzoScontatoMinore.toFixed(2))
        }
        // ALTRIMENTI SE ha più di 65 anni  
        else if (eta > 64) {
            // allora avrà uno sconto del 40%
            let scontoSenior = costoTotale * sconto40
            let prezzoScontatoSenior = costoTotale - scontoSenior
            console.log(prezzoScontatoSenior.toFixed(2))
            }
        // ALTRIMENTI paga il prezzo intero
        else {
            console.log(costoTotale)
        }
}


    


// IL PC CI DA IL RISULTATO CON DUE DECIMALI