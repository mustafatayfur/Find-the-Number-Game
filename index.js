let guessNumber = document.querySelector("#form_guess");
let guessButton = document.querySelector("#form_button");
let tryButton = document.querySelector("#tryagain");
let result = document.querySelector("#result1");
let result2 = document.querySelector("#result2");
let randomNumber = Math.floor(Math.random() * 100 + 1);
let guessCount = 0;

console.log(randomNumber);

guessButton.addEventListener("click", checkNumber);

function checkNumber() {
    let numb = guessNumber.value;
    guessCount++;
    if (parseInt(numb) === randomNumber) {
        result2.innerText = `CONGRATULATIONS!!!YOU GUESSED THE NUMBER RIGHT IN ${guessCount}`;
        guessNumber.value = '';
        tryButton.innerText = 'Try Again';
    } else if (numb < randomNumber) {
        result1.innerText = "SORRY!! TRY A GREATER NUMBER";
        guessNumber.value = '';
    } else if (parseInt(numb) > randomNumber) {
        result1.innerText = "SORRY!! TRY A SMALLER NUMBER";
        guessNumber.value = '';
    } else if (parseInt(numb) < 0 || parseInt(numb) > 100) {
        result1.innerText = "PLEASE WRİTE FROM 1 TO 100";
        guessNumber.value = '';
    }
};
tryButton.addEventListener("click",() =>{
    result2.innerText = '';
    guessNumber.value = '';
    result1.innerText = '';
    tryButton.innerText = '';
    guessCount = 0;
});