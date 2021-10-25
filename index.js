let guessNumber = document.querySelector("#form_guess");
let guessButton = document.querySelector("#form_button");
let result = document.querySelector("#result");

guessButton.addEventListener("click", function {

    let randomNumber = Math.floor(Math.random() * 10 + 1);
    let guessCount = 0;
    guessNumber = Number(guessNumber.value)

    if (guessNumber < randomNumber) {
        guessCount++;
        result.innerText = "SORRY!! TRY A GREATER NUMBER";

    } else
    if (guessNumber > randomNumber) {
        guessCount++;
        result.innerText = "SORRY!! TRY A SMALLER NUMBER";

    } else if (guessNumber == randomNumber) {
        result.innerText = "CONGRATULATIONS!!! YOU GUESSED THE NUMBER RIGHT IN " +
            guessCount + " GUESS ";

    }
})