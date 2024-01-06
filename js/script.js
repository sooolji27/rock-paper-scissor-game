const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;
	let userName = '';


	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
		const playerOptions = [rockBtn, paperBtn, scissorBtn];
		const computerOptions = ['rock', 'paper', 'scissors']

		playerOptions.forEach(option => {
			option.addEventListener('click', function () {

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${5 - moves}`;


				const choiceNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[choiceNumber];

				winner(this.innerText, computerChoice)

				if (moves == 5) {
					gameOver(playerOptions, movesLeft);
				}
			})
		})

	}
	
	// Function to decide winner
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === computer) {
            result.textContent = 'Tie'
        }
        else if (player == 'rock') {
            if (computer == 'paper') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
 
            } else {
                result.textContent = 'Player Won'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'scissors') {
            if (computer == 'rock') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'paper') {
            if (computer == 'scissors') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
	

	
	const gameOver = (playerOptions, movesLeft) => {
		let username = localStorage.getItem('username');
		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');
	
		playerOptions.forEach(option => {
			option.style.display = 'none';
		})
	
		chooseMove.innerText = 'Game Over!!'
		movesLeft.style.display = 'none';
	
		if (playerScore > computerScore) {
			result.style.fontSize = '2rem';
			result.innerText = `${username}, You Won The Game`
			result.style.color = 'black';
		}
		else if (playerScore < computerScore) {
			result.style.fontSize = '2rem';
			result.innerText = `${username}, You Lost The Game`;
			result.style.color = 'black';
		}
		else {
			result.style.fontSize = '2rem';
			result.innerText = `${username}, It's a Tie`;
			result.style.color = 'black'
		}
	}

	document.getElementById("reloadButton").addEventListener("click", function(){
		location.reload();
	 });
	 
	playGame();

}

game();
