import inquirer from "inquirer";

// 1- computer will generate the random number
// 2- user input for guessing number
// 3- compare user input with computer generated number and show result 

const randomNumber = 1-6;
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number: ", 
    },
]);
console.log(answers);

if (answers.userGuessedNumber === randomNumber){
    console.log("Congratulations you guessed right number.")
} else {
    console.log("you guess wrong number");
}
