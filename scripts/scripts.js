// function play() {
//     // Hide the home screen by using hidden class
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');

//     // show the playground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event) {
    const playerKeyPressed = event.key;
    console.log(playerKeyPressed);

    // Stop the game if pressed ESC
    if (playerKeyPressed === 'Escape') {
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check matched or not
    if (playerKeyPressed === expectedAlphabet) {
        // update score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;

        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore);

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        gameLoop();
    } else {
        // update score
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        const currentLife = getTextElementValueById('current-life');
        const newLife = currentLife - 1;
        setTextElementValueById('current-life', newLife);
        
        if (newLife === 0) {
            gameOver();
        }
        
    }
}

// Capture Keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);

function gameLoop() {
    //step1: generate a random alphabet
    const alphabet = getARandomAlphabet();

    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //add background color using alphabet
    setBackgroundColorById(alphabet);
}

function play() {
    hideElementByID('home');
    hideElementByID('score');
    showElementByID('play-ground');

    //reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    gameLoop();
}

function gameOver() {
    hideElementByID('home');
    hideElementByID('play-ground');
    showElementByID('score');

    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('final-score', lastScore);

    // clear the last selected alphabet highlighted
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}