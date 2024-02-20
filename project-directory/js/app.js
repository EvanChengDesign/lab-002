// Prompting user for their name
let userName = prompt('Welcome! What is your name?');

// Display personalized greeting
alert('Welcome to the site, ' + userName + '!');

// Display name back to the user
console.log('User\'s name is: ' + userName);

// Function to ask yes/no questions
function askQuestion(question) {
  let answer = prompt(question).toLowerCase(); // Normalize user input

  if (answer === 'yes' || answer === 'y') {
    alert('Correct!');
    console.log('User answered correctly: Yes');
  } else if (answer === 'no' || answer === 'n') {
    alert('Incorrect!');
    console.log('User answered correctly: No');
  } else {
    alert('Invalid input. Please answer with \'yes\' or \'no\'.');
    console.log('User provided invalid input.');
    askQuestion(question); // Ask the question again if the input is invalid
  }

  // Append user's answer to the list
  let answerListItem = document.createElement('li');
  answerListItem.textContent = question + ': ' + answer.toUpperCase();
  document.getElementById('answers-list').appendChild(answerListItem);
}

// Ask five yes/no questions
askQuestion('Is the sky blue?');
askQuestion('Is the earth flat?');
askQuestion('Do birds fly?');
askQuestion('Is water wet?');
askQuestion('Is the sun green?');
