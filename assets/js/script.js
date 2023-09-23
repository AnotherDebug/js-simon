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

// Riferimenti
const elementRef = document.querySelector("h1");

//Variabili di controllo randomizer
const min = 0;
const max = 30;

//variabile di controllo livello di difficoltà
const elementsNumber = 5;

//2. Collection di numeri random univoci
const randomNum = uniqueRandomNum(1, 100, elementsNumber);
console.log(randomNum);
//8. Collection di numeri Utente richiesti
const requestNum = [];



//5. Stampo i valori in pagina
printResult(elementRef, randomNum);

//6. Reset settato a 5 secondi
setTimeout(reset, 5000);

//7. Prendo i dati dal prompt, li comparo e stampo i risultati corrispondenti
setTimeout(function () {
  getPromtValues();
  const compareResult = compareValues(randomNum, requestNum);
  console.log(compareResult);
  //10. Stampo tutti i possibili risultati
  if (compareResult.length === randomNum.length) {
    printResult(elementRef, "Bravo! Hai indovinato tutti i numeri!!");
  } else if (compareResult.length > 0) {
    printResult(elementRef, "Hai indovinato soltanto " + compareResult.length + " numeri!");
    printResult(elementRef, compareResult);
  } else {
    printResult(elementRef, "Non hai indovinato alcun numero!!");
  }
}, 6000);

//1. Ciclo for che itera il push dei numeri random
function uniqueRandomNum(min, max, loop) {
  const rand = [];
  while (rand.length < loop) {
    const randomNumber = randomizer(min, max);
    if (!rand.includes(randomNumber)) {
        rand.push(randomNumber);
    }
  }
  return rand;
}

//10. Stampo il messaggio con le informazioni corrispondenti
function printResult(element, text) {
  element.innerHTML += `<h1>${text}</h1>`;
}

//6. funzione reset invocata nel setTimeout
function reset() {
  elementRef.innerHTML = "";
}

//7. Funzione che itera il push dei numeri richiesti
function getPromtValues() {
  for (let i = 0; i < elementsNumber; i++) {
    requestNum.push(parseInt(prompt("Inserisci un numero visualizzato")));
    console.log(requestNum);
  }
}

//9. Confronto quali numeri sono stati indovinati
function compareValues(array1, array2) {
  const result = [];
  for (let i = 0; i < array2.length; i++) {
    for (let j = 0; j < array1.length; j++) {
      if (array1[j] === array2[i]) {
        result.push(array2[i]);
        console.log(result);
        break;
      }
    }
  }
  return result;
}

//3. Generatore di numeri random
/**
 *
 * @param {number} min
 * @param {number} max
 * @returns
 */
function randomizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
