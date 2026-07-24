// write a js program to generate a random number and store it in a variable . The program then takes an inputfrom the user to tell them whether the guess was correct , greater or lesser than the original number 
// 100 - (no of guesses) is the score of the user. The progrtam is expected to terminatesonce the number is gussed . The number should be between 1 - 100
const p = require("prompt-sync")();
const randomNumber = Math.floor(Math.random()*100)+1;
let guess;
let numberOfGuesses = 0;
console.log("=== Guess the Number Game ===");
console.log("I Have chosen a number between 1 and 100. Try to guess it!\n");

do {
    let input = p("Enter Your Guess: ")
    guess = Number.parseInt(input);
    numberOfGuesses++;

    if (Number.isNaN(guess)){
        console.log("Please Enter a Valid Number!\n");
        continue;
    }

     if (guess > randomNumber){
        console.log("Your guess is greater than the original number. Try a lower number.\n");
     }

     else if (guess < randomNumber){
        console.log("Your guess is lower than the original number. Try a lower number.\n");
     }

     else{
        console.log("\n 🎉 Correct! You guessed the right number!");
        console.log(`The original number was: ${randomNumber}`)
        
     }
} while (guess !== randomNumber);

let score = 100 - numberOfGuesses;
console.log("\n ====Game Over===");
console.log(`Total Gusses: ${numberOfGuesses}`);
console.log(`Your Final Score: ${score}/100`)
