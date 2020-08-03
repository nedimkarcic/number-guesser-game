let userInput = document.querySelector("input");
let randomNumber = Math.floor(Math.random() * 39); 
const submitButton = document.querySelector('#button');
const hint1 = document.querySelector('#hint1');
const hint2 = document.querySelector('#hint2');
const message = document.querySelector('#message');
const playAgainButton = document.querySelector('#playAgainButton');
let guessCounter = 1;
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');

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
	userInput.value = '';

};

// Just set an event listener on the parent of all the buttons
// and let any click event that originates from a button bubble
// up to the parent where it will be handled. This is called 
// event delegation and you'll set up one event handler instead
// of 10 and you won't need any loop.
document.querySelector("div.container").addEventListener("click", returnId);

let wordMappings = ["zero","one","two","three","four","five","six","seven","eight","nine"];

function returnId(event) {
  // Get the text of the clicked button
  let text = event.target.textContent;
  
  // Convert the text to a number and update the value
  userInput.value += +text;
  
  // Get the corresponding word out of the array and return it
  console.log(wordMappings[text]);
};


submitButton.addEventListener('click', equalCheck);
userInput.addEventListener('keyup', equalCheckOnEnter);
playAgainButton.addEventListener('click', playAgain);