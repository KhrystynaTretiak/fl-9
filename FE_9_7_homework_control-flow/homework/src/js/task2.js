let start = confirm('Do you want to play a game?');
const newGamePrize = 10;
const newGameRange = 5;
const oneToRandom = 1;

if (start === false) {
    alert('You did not become a millionaire, but can.');
} else {
    game(newGameRange, newGamePrize);
}

function getRandomNum(num) {
    return Math.floor(Math.random() * (num + oneToRandom));
}

function game(range, prize, totalPrize = 0) {
    let a = getRandomNum(range);
    let currentPrize = prize;
    for (let i = 3; i > 0; i--) {

        let number = prompt(`Enter a number from 0 to ${range} 
        \n Attempts left: ${i}
        \n Total prize: ${totalPrize}
        \n Possible prize on current attempt: ${currentPrize} `);

        if (+number === a) {
            let isContinue = confirm(`Congratulation! Your prize is: ${currentPrize + totalPrize} 
            \n Do you want to continue?`);
            if (isContinue) {
                game(range * 2, prize * 3, totalPrize + currentPrize);
            } else {
                alert(`Thank you for a game. Your prize is: ${currentPrize + totalPrize}`);
                if (confirm('Do you want play again?')) {
                    game(newGameRange, newGamePrize);
                    break
                } else {
                    break
                }
            }
            break

        } else if (number === null) {
            break
        } else {
            if (i === oneToRandom) {
                alert(`Thank you for a game. Your prize is: ${totalPrize}`);
                if (confirm('Do you want play again?')) {
                    game(newGameRange, newGamePrize);

                }
            }
        }
        currentPrize = Math.floor(currentPrize / 2);

    }

}



