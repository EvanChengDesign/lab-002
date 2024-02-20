// prompt user for their name
let userName = prompt('Welcome! What is your name?');

// display a personalized greeting
alert('Welcome to the site, ' + userName + '!');

// display name back to the user in the console
console.log('User\'s name is: ' + userName);

// ask y/n questions
function askQuestion(question) {
  let answer = prompt(question).toLowerCase(); // make user input lower

  if (answer === 'yes'  || answer == 'y') {
    alert('Correct!');
    console.log('User answered correctly: Yes');
  } else if (answer === 'no' || answer === 'n') {
    alert('Incorrect!');
    console.log('User answered correctly: No');
  } else {
    alert('Invalid input. Please answer with \'yes\' or \'no\'.');
  }

}

