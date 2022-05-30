const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissor');

let playerChoice;
let computerChoice;
let text;
let playerScore = 0;
let computerScore = 0;
const array = ['rock', 'paper', 'scissor']

function result(){
    document.getElementById('playerScore').innerHTML = playerScore
    document.getElementById('computerScore').innerHTML = computerScore
    document.getElementById('text').innerHTML = text

    if (playerScore == 5 || computerScore == 5) {
        setTimeout(()=> {
            alert('gameover');
        }, 1000)
    } 
}

function game(){
    document.querySelectorAll('.btns').forEach((btn)=> {
        btn.addEventListener('click', (e) => {
            playerChoice = e.target.name
            document.getElementById('playerChoice').setAttribute('src', `./img/${playerChoice}.png`)
            computerChoice = array[Math.floor(Math.random() * array.length)]
            document.getElementById('computerChoice').setAttribute('src', `./img/${computerChoice}.png`)

            switch (true) {
                case playerChoice === 'rock' && computerChoice === 'scissor':
                case playerChoice === 'paper' && computerChoice === 'rock':
                case playerChoice === 'scissor' && computerChoice === 'paper':
                    playerScore ++
                    text = `Player won, ${playerChoice} beats ${computerChoice}`
                    break
                case playerChoice === 'rock' && computerChoice === 'paper':
                case playerChoice === 'paper' && computerChoice === 'scissor':
                case playerChoice === 'scissor' && computerChoice === 'rock':
                    computerScore ++
                    text = `Computer won... ${playerChoice} loses to ${computerChoice}`
                    break
                case playerChoice === 'rock' && computerChoice === 'rock':
                case playerChoice === 'paper' && computerChoice === 'paper':
                case playerChoice === 'scissor' && computerChoice === 'scissor':
                    text = 'Its a tie!'
                    break
            }
            result()
        })
    })
}
game()



