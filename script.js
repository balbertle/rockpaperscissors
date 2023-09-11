const charmanderButton = document.getElementById('charmander');
const squirtleButton = document.getElementById('squirtle');
const bulbasaurButton = document.getElementById('bulbasaur');
const resultMessage = document.querySelector('.result');

charmanderButton.addEventListener('click', () => playGame('charmander'));
squirtleButton.addEventListener('click', () => playGame('squirtle'));
bulbasaurButton.addEventListener('click', () => playGame('bulbasaur'));

function playGame(playerChoice){
    const choice =['charmander','squirtle','bulbasaur'];
    const computerChoice = choice[Math.floor(Math.random() * choice.length)];
    const playerWins = (playerChoice === 'charmander' && computerChoice ==='bulbasaur') || (playerChoice ==='squirtle' && computerChoice ==='charmander') || (playerChoice ==='bulbasaur' && computerChoice ==='squirtle');

    if (playerChoice === computerChoice){
        resultMessage.textContent = `You both chose ${playerChoice}. It\'s a tie!`;
    }
    else if (playerWins){
        resultMessage.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. You win!`;
    }
    else{
        resultMessage.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. You lose!`;
    }
}