let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// generateTarget Function
const generateTarget= random => {
  return Math.floor(Math.random()*10);
};

// compareGuesses Function
const compareGuesses = (human, computer) => {
  const random = generateTarget();

  let humanClosest = random - human;
  let computerClosest = random - computer;
  humanClosest = Math.abs(humanClosest);
  computerClosest = Math.abs(computerClosest);

  if(computerClosest < humanClosest){
    return false;
  }else{
    return true;
  }
};

// const human = compareGuesses(9,2);

const updateScore = guesser => {
  if(guesser === 'human'){
    return humanScore+=1;

  }else if(guesser === 'computer'){
    return computerScore+=1;
  }  
}
// console.log(updateScore('human'));


