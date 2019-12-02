const userInput = document.querySelector('#userInput');
const randomNumber = Math.floor(Math.random() * 101); 
const button = document.querySelector('#button');
const message = document.querySelector('#message');
let guessCounter = 1;



function equalCheck(e) {
	if (guessCounter === 1 && userInput === randomNumber) {
		message.textContent = 'Congratulations!';
	};

	if (guessCounter === 1 && userInput !== randomNumber) {
		message.textContent = 'Not correct! You have 2 guesses left!';
	}

	if (guessCounter === 2 && userInput === randomNumber) {
		message.textContent = 'Congratulations!';
	};

	if (guessCounter === 2 && userInput !== randomNumber) {
		message.textContent = 'Not correct! You have 1 guess left!';
	}

	if (guessCounter === 3 && userInput === randomNumber) {
		message.textContent = 'Congratulations!';
	};

	if (guessCounter === 3 && userInput !== randomNumber) {
		message.textContent = 'Game Over!';
	}

	userInput.value = '';
	guessCounter++;

}; 

function equalCheckOnEnter(e){
	if(e.keyCode === 13){
	equalCheck();
};
};


button.addEventListener('click', equalCheck);
userInput.addEventListener('keyup', equalCheckOnEnter);