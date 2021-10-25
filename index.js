let guessNumber = document.querySelector("#form_guess");
let guessButton = document.querySelector("#form_button");
let result = document.querySelector("#result");
let randomNumber = Math.floor(Math.random() * 100 + 1);
let guessCount = 0;

console.log(randomNumber);

guessButton.addEventListener("click", checkNumber);

function checkNumber() {
    let numb = guessNumber.value;
    guessCount++;
    if (parseInt(numb) === randomNumber) {
        result.innerText = `CONGRATULATIONS!!!YOU GUESSED THE NUMBER RIGHT IN ${guessCount}`;
    } else if (numb < randomNumber) {
        result.innerText = "SORRY!! TRY A GREATER NUMBER";
    } else if (parseInt(numb) > randomNumber) {
        result.innerText = "SORRY!! TRY A SMALLER NUMBER";
    } else if (parseInt(numb) < 0 || parseInt(numb) > 100) {
        result.innerText = "PLEASE WRİTE FROM 1 TO 100"
    }
};