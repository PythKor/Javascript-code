let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
   return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, secretTarget) {
    const humanDifference = Math.abs(humanGuess - secretTarget);
    const computerDifference = Math.abs(computerGuess - secretTarget);

    // Ο χρήστης κερδίζει αν η διαφορά του είναι μικρότερη ή ίση από αυτή του υπολογιστή
    return humanDifference <= computerDifference;
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}

console.log("Current Round:", currentRoundNumber);

// Παράδειγμα 1: Συγκρίνουμε τις μαντείες και ενημερώνουμε το σκορ
let humanGuess1 = 3;
let computerGuess1 = 5;
let secretTarget1 = 4;

if (compareGuesses(humanGuess1, computerGuess1, secretTarget1)) {
    console.log("Human wins this round");
    updateScore('human');
} else {
    console.log("Computer wins this round");
    updateScore('computer');
}

console.log("Human Score:", humanScore);
console.log("Computer Score:", computerScore);

// Παράδειγμα 2: Προχωράμε στον επόμενο γύρο
advanceRound();
console.log("Next Round:", currentRoundNumber);

// Παράδειγμα 3: Συγκρίνουμε ξανά και ενημερώνουμε το σκορ
let humanGuess2 = 8;
let computerGuess2 = 2;
let secretTarget2 = 6;

if (compareGuesses(humanGuess2, computerGuess2, secretTarget2)) {
    console.log("Human wins this round");
    updateScore('human');
} else {
    console.log("Computer wins this round");
    updateScore('computer');
}

console.log("Human Score:", humanScore);
console.log("Computer Score:", computerScore)
