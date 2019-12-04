const userInput = document.querySelector('#userInput');
let randomNumber = Math.floor(Math.random() * 39); 
const submitButton = document.querySelector('#button');
const hint1 = document.querySelector('#hint1');
const hint2 = document.querySelector('#hint2');
const message = document.querySelector('#message');
const playAgainButton = document.querySelector('#playAgainButton');
let guessCounter = 1;


function equalCheck(e) {

	if (guessCounter === 1 && parseInt(userInput.value) === randomNumber) {
			congrats();
	};

	if (guessCounter === 1 && parseInt(userInput.value) !== randomNumber) {
		message.textContent = 'You have 2 guesses left!';
	};

	if (guessCounter === 2 && parseInt(userInput.value) === randomNumber) {
			congrats();
	};

	if (guessCounter === 2 && parseInt(userInput.value) !== randomNumber) {
		message.textContent = 'You have 1 guess left!';
	};

	if (guessCounter === 3 && parseInt(userInput.value) === randomNumber) {
			congrats();
	};

	if (guessCounter === 3 && parseInt(userInput.value) !== randomNumber) {
		message.textContent = 'Game Over!';
		userInput.disabled = true;
		submitButton.disabled = true;
	};

	hints();

	console.log(randomNumber, parseInt(userInput.value));

	userInput.value = '';
	guessCounter++;

}; 

function hints() {
	hint1.textContent += userInput.value + ' ';

	if(parseInt(userInput.value) > randomNumber){
		hint2.textContent = 'Try with the lower one!'
	};

	if(parseInt(userInput.value) < randomNumber){
		hint2.textContent = 'Try with the higher one!'
	};

	if(isNaN(parseInt(userInput.value)) || parseInt(userInput.value) < 0 || parseInt(userInput.value) > 38){
    	hint2.textContent = 'Please enter a number between 0 and 38!';
  	};

	if(guessCounter === 3){
		hint2.textContent = `The correct number is ${randomNumber}`;
	};

};

function congrats() {
		message.textContent = 'Congratulations!';
		userInput.disabled = true;
		submitButton.disabled = true;
		hint2.textContent = `The correct number is ${randomNumber}`;
}

function equalCheckOnEnter(e){
	if(e.keyCode === 13){
	equalCheck();
};
};

function playAgain(){
	userInput.disabled = false;
	submitButton.disabled = false;
	guessCounter = 1;
	message.textContent = "Let's try!";
	randomNumber = Math.floor(Math.random() * 39);
	hint1.textContent = '';
	hint2.textContent = '';

};


submitButton.addEventListener('click', equalCheck);
userInput.addEventListener('keyup', equalCheckOnEnter);
playAgainButton.addEventListener('click', playAgain);