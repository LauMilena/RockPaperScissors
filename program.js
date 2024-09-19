console.log('hi');


const getUserChoice = (userImput) => {
  if (userImput === 'rock'|| userImput === 'paper'|| userImput === 'scissors'|| userImput === 'bomb'){
  return userImput;
} else {
  console.log('error')
}
}

const getComputerChoice = function() {
 randomNum= Math.floor(Math.random()*3);
 if (randomNum === 1){
  return 'paper';
 } else if (randomNum === 2){
  return 'scissors';
 } else {
  return 'rock';
 }
}

function determineWinner (userChoice, computerChoice){
  if (userChoice === computerChoice){
    return 'it was a tie';
  }
  if (userChoice === 'bomb'){
    return 'The user won';
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'The computer won';
    }else{
      return'The user won';
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'The computer won';
    }else{
      return'The user won';
    }
  }
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'The computer won';
    }else{
      return'The user won';
    }
  }
}

function playGame (){
  let userChoice = getUserChoice('scissors');
  let computerChoice = getComputerChoice('rock');

  console.log(userChoice);
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice));

}

playGame();