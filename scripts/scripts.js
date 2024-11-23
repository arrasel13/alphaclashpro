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

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check matched or not
    if (playerKeyPressed === expectedAlphabet) {
        removeBackgroundColorById(expectedAlphabet);
        gameLoop();
    } else {
        console.log('not matched');
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
    showElementByID('play-ground');
    gameLoop();
}