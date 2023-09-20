/*
**Descrizione:**

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.

Dopo 5 secondi i numeri scompaiono e l’utente deve inserire, tramite il prompt(), uno alla volta, i numeri che ha visto precedentemente.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


==========================================================================================================
1. Genero 5 numeri casuali;
2. Dichiaro una variabile dove salvo i numeri randomici;
3. Creo una funzione che randomizza i numeri;
4. Con un for ciclo l'array per prendere tutti i valori con indice corrispondente;
5. Stampo i valori in pagina.
6. Dopo 5 secondi i numeri scompaiono;
7. Con un ciclo for chiedo con prompt per 5 volte i numeri che ha visto;
8. Raccolgo i valori in una variabile;
9. Confronto quanti e quali numeri sono stati indovinati tramite una funzione(passaggio da ricontrollare);
10. Stampo il messaggio con le informazioni corrispondenti;
*/

const elementRef = document.querySelector('h1');
const min = 0;
const max = 10;
let randomNum = [];

for(let i = 0; i<5; i++) {
    randomNum = randomizer(min, max);
elementRef.innerHTML += `<h1>${randomNum}</h1>`;
    console.log(randomNum);
};


/**
 *
 * @param {number} min
 * @param {number} max
 * @returns
 */
function randomizer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }