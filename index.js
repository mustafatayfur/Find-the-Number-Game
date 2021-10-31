let guessNumber = document.querySelector("#form_guess");
let guessButton = document.querySelector("#form_button");
let tryButton = document.querySelector("#tryagain");
let result1 = document.querySelector("#result1");
let result2 = document.querySelector("#result2");
let displayForm = document.querySelector("#form");
let infoP = document.querySelector("#info");
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
        result1.innerText = '';
        displayForm.style.display = "none";
        infoP.innerText = ''
    }else if (parseInt(numb) < 1 || parseInt(numb) > 100) {
        result1.innerText = "PLEASE WRİTE FROM 1 TO 100";
        guessNumber.value = '';
    } else if (numb < randomNumber) {
        result1.innerText = "SORRY!! TRY A GREATER NUMBER";
        guessNumber.value = '';
    } else if (parseInt(numb) > randomNumber) {
        result1.innerText = "SORRY!! TRY A SMALLER NUMBER";
        guessNumber.value = '';
    }
};
tryButton.addEventListener("click",() =>{
    result2.innerText = '';
    guessNumber.value = '';
    result1.innerText = '';
    tryButton.innerText = '';
    guessCount = 0;
    displayForm.style.display = "contents";
    infoP.innerText = 'We have selected a random number between 1 - 100. See if you can guess it.'
    
});