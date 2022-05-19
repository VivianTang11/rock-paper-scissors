const computerChoice = () => {
    const array = ['rock', 'paper', 'scissors']
    return array[Math.floor(Math.random() * array.length)];
}

const playerChoice = () => {
    let choice = prompt('Rock paper or scissors')
    if (choice != null){
        return choice
    }
}

const playRound = (playerChoice, computerChoice) => {
    switch (true) {
        case playerChoice === 'rock' && computerChoice === 'scissors':
        case playerChoice === 'paper' && computerChoice === 'rock':
        case playerChoice === 'scissors' && computerChoice === 'paper':
            return `You won! ${playerChoice} beats ${computerChoice}`;
        case playerChoice === 'rock' && computerChoice === 'paper':
        case playerChoice === 'paper' && computerChoice === 'scissors':
        case playerChoice === 'scissors' && computerChoice === 'rock':
            return `You lose... ${computerChoice} beats ${playerChoice}`;
        case playerChoice === 'rock' && computerChoice === 'scissors':
        case playerChoice === 'paper' && computerChoice === 'rock':
        case playerChoice === 'scissors' && computerChoice === 'paper':
            return `Its a tie!`;
    }
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
}

console.log(playRound(playerChoice(),computerChoice()))

