// function to check if a word is a palindrome
// a palindrome is a word that is spelled the same forwards and backwards

// I needed to google the correct syntax for the split and join methods, as I forgot the need for quotes ""

let word = "kayak"
let wordIsToxic = "Rando3m& "

// Simple solution

function isPalindromeCheck(word) {
    // reverse word and check is word and word reverse match
    let wordIsReversed = word.split("").reverse().join("")
    console.log(wordIsReversed)

    return word === wordIsReversed ? true : false
}

isPalindromeCheck(word)

// Solution with sanitisation for symbols, spaces and capital letters

function isPalindromeChecker(word) {

    // sanitise input
    let wordLowerCase = word.toLowerCase().trim()
    const re = /[^a-z]/g
    wordIsSantised = wordLowerCase.replace(re, "")

    // reverse santised input using for loop
    // start the loop at the end of the word and reduce i by 1 each iteration. Stop when i is less than 0
    let wordIsReversed = "";
    for(let i = wordIsSantised.length -1; i >= 0; i--) {
        wordIsReversed += wordIsSantised[i]
}
    console.log({wordIsReversed})
}
isPalindromeChecker(wordIsToxic)