let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// generateTarget Function
const generateTarget= () => Math.floor(Math.random()*10);

const getAbsoluteDistance = (distance1, distance2) => Math.abs(distance1 -distance2);

// compareGuesses Function
const compareGuesses = (human, computer, target) => {
  if(human > 9 || human < 0 ){
    window.alert('Please choose number between 0 and 9.');
  }else if(Math.abs(human - target) <= Math.abs(computer - target) || Math.abs(human - target) === Math.abs(computer - target)){
    return true;
  }else{
    return false;
  } 
};

// updateScore Function
const updateScore = guesser => {
  if(guesser === 'human'){
    return humanScore++;
  }else{
    return computerScore++;
  }  
};

// advanceround Function
const advanceRound = () => currentRoundNumber ++;