
const numeriRandomArray = [];

function generaNumeriRandom(numeroBlacklist, min, max) {
    let check = false;
    let numero;
    
    while ( !check) {
        numero = Math.floor(Math.random() * ((max + 1) - min) + min);
        if (!numeroBlacklist.includes(numero)) {
            check = true;
        }
    }
    return numero;
}

for (let i = 0; i < 5; i++) {
    numeriRandomArray.push(generaNumeriRandom(numeriRandomArray, 0, 100))
}

document.getElementById("numeri").innerHTML += numeriRandomArray;
console.log(numeriRandomArray);


function nascondeNumero() {
    document.getElementById("numeri").innerHTML = "";
}

function domandaUtente(dammiNumero) {
    const numeriUtente = [];
    const numeriIndovinati = [];

    for (let i = 0; i < 5; i++) {
        const numeroPromptUtente = parseInt(prompt("inserisci un numero"));

        if(!isNaN(numeroPromptUtente)){
            numeriUtente.push(numeroPromptUtente)
            if(dammiNumero.includes(numeroPromptUtente)){
                numeriIndovinati.push(numeroPromptUtente)
            }
        }
    }
    document.getElementById("numeri").innerHTML = `I numeri erano ${numeriRandomArray},
    tu hai inserito ${numeriUtente}.
    Hai indovinato ${numeriIndovinati.length} numero/i`
}

setTimeout(nascondeNumero, 1000)
setTimeout(domandaUtente, 2000, numeriRandomArray)

