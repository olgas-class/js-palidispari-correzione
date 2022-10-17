// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1. Salvare la parola dell'utente
const userWord = prompt("Dimmi una parola");
console.log(userWord);

// 2. Definire se la parola sia palindroma e scrivere OUTPUT
    // SE la parola è palindroma
    //     Scrivo è palindroma
    // ALTRIMENTI 
    //     Scrivo non è palidroma

const resultElement = document.getElementById("result");
if (isPalindrome(userWord)) {
    resultElement.innerHTML = `La parola ${userWord} è palindroma`;
} else {
    resultElement.innerHTML = `La parola ${userWord} non è palindroma`;
}
    
// FUNCTIONS

/**
 * Description: Data una parola, definisce se è palindroma
 * @param {string} word 
 * @returns {boolean} true se la parola è palindroma, false altrimenti
 */
function isPalindrome(word) {
    // 2.1 Creare la prola al contrario    
    const revertWord = reverseWord(word); 

    // 2.2. Confrontare la parola originale e quella al contrario:
    let isPalindrome;
            // SE le parole sono uguale
                // è palindroma
            // ALTIMENTI
                // non è palindroma
    if (word === revertWord) {
        isPalindrome = true;
    } else {
        isPalindrome = false;
    }

    return isPalindrome;
}
// TEST
// console.log(isPalindrome("otto")); // ---> true

/**
 * Description: prende una parola e restituisce questa parola scritta al contrario
 * @param {string} wordToReverse 
 * @returns {string} la stringa che rappresenta la parola al contrario
 */
function reverseWord(wordToReverse) {
    let result = "";
    for (let i = wordToReverse.length - 1; i >= 0; i--) {
        result += wordToReverse[i];
    }
    return result;
}

// TEST
// console.log(reverseWord("ok"));