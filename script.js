//Visualizzare in pagina 5 numeri casuali.
//Da lì parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati
//individuati.

const listaNumeriCasuali = [];




function generaNumeroRandom() {
    for(i = 0; i < 5; i++){
        let numeroRandom = (Math.floor(Math.random() * 20) + 1);
        console.log(numeroRandom);
        listaNumeriCasuali.push(numeroRandom);
        const main = document.querySelector("main");
        const nuoviSpan = document.createElement("span");
        nuoviSpan.innerHTML = numeroRandom;
        nuoviSpan.classList.add("bg-primary", "mx-5", "p-5","text-white")
        main.appendChild(nuoviSpan);
    }
}
generaNumeroRandom();
