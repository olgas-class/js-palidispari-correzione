// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const userChoice = prompt("Dimi se pari o dispari");
console.log(userChoice);
const userNumber = parseInt(prompt("Dimmi un numero da 1 a 5"));
console.log(userNumber);
const computerNumber = getRndInteger(1, 5);
console.log(computerNumber);

const resultSum = userNumber + computerNumber;
console.log(resultSum);
const resultCheck = isOddOrEven(resultSum);
console.log(resultCheck);

// OUTPUT
if ( resultCheck === userChoice ) {
    alert("Hai vinto!");
} else {
    alert("Hai perso");
}

// FUNCTIONS
/**
 * Description Genera un numero random in range tra min e max (inclusi)
 * @param {number} min
 * @param {number} max
 * @returns {number} un numero intero generato in modo random
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// TEST
// console.log(getRndInteger(40, 50));

/**
 * Description: la funzione che verifica se un numero è pari o dispari
 * @param {number} numberToCheck
 * @returns {string} "pari" se numero è pari e "disapri" se è dispari 
 */
function isOddOrEven(numberToCheck) {
    let result = "dispari";
    if(numberToCheck % 2 === 0) {
        result = "pari";
    }
    return result;
}

// TEST
// console.log(isOddOrEven(15));