function start(){
  let secretNumber = parseInt(Math.random() * 101);
  let qtdAttempt = 1;
  let attempt;

  while(attempt != secretNumber) {
      attempt = prompt('type a number between 0 and 100');

    if (attempt === null) {
      break;
      }

    if (qtdAttempt < 5){
    if (attempt == secretNumber) {
      alert('CONGRATS!');
    }
    else if (attempt > secretNumber) {
      alert('Incorrect! The secret number is lower than ' + attempt + '. You have tried ' + (qtdAttempt++) + ' times');
    }
      else if (attempt < secretNumber) {
      alert('Incorrect! The secret number is greater than '+ attempt + '. You have tried ' + (qtdAttempt++) + ' times');
    }
    }
    else {
      alert("You lose! The number was " + secretNumber + "!");
      break;
    }
  }
}
