function computerPlay() {
    playList = ['rock', 'paper', 'scissors']
    return playList[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        return `Tie`
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You Win! Rock beats Scissors`
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `You Win! Paper beats Rock`
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You Win! Scissors beats paper`
    } else {
        return `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
        } beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(prompt('Rock, Paper, Scissors'), computerPlay()))
    }
}

game();