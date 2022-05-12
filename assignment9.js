const prompt = require('prompt-sync')({ sigint: true });

// Step 1: Get user input (don't forget that the input is a string)

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);


// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;


//take user input
// Random number from 1 - 100
//pre-define this numberInMind
let numberInMind = Math.floor(Math.random() * 100) + 1;

//each while loop just like a round for user to guess
//users are guessing a predefined so called correct number
while (!foundCorrectNumber) {

  //not changing while user is again and again guessing in each 1
  console.log(numberInMind);

  // Step 2: Compare the guess to the secret answer and
  // let the user know the feedback (too large, too small, correct).

  var guess;
  guess = prompt("Please enter your guess number between 1 until 100. ");

  console.log("Your guess number is: " + guess);

  if (guess == numberInMind) {
    console.log("Correct! You Win! ")
    newGame();

  } else if (guess > numberInMind) {
    console.log("Your guess is too large. Try Again! ")

  } else if (guess < numberInMind) {
    console.log("Your guess is too small. Try Again! ")
  }
}


// Bonus Point: prompt user and provide option for user to start a new game after winning 
function newGame() {
  let foundCorrectNumber = false;


  //since user requesting a new game
  //you should put a new number in this numberInMind
  //numberInMind reset to a new random number for user to guess
  let numberInMind = Math.floor(Math.random() * 100) + 1;

  //each while loop just like a round for user to guess
  //users are guessing a predefined so called correct number
  while (!foundCorrectNumber) {

    //not changing while user is again and again guessing in each 1
    console.log(numberInMind);

    let newGame = prompt("Do you want to start a new game? (y/n) ");

    if (newGame == "y") {
      console.log("Cool! Let's start a new game. ")
      return;

    } else if (newGame == "n") {
      console.log("Thank you for playing! ")
      process.exit(0);
    }
  }
}

