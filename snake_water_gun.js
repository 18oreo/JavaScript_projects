// Use Javascript to create a game of snake water & gun.
// The game should ask you to enter S,W or G
// The computer should be able to randomly generate S,W or G and declear win or loos using alert
// Use confirm and prompt whenever required

function playGame() {
    let playAgain = true;
    while (playAgain) {
        let input = prompt("Enter S(snake), W(water), G(gun):");

        if (input === null) {
            alert("Game exited....");
            break;
        }

        input = input.trim().toUpperCase();

        if (input !== 'S' && input !== 'W' && input !== 'G') {
            alert("Invalid input! Please enter S, W, G");
            continue; 
        }
        const choices = ['S', 'W', 'G'];
        const computerInput = choices[Math.floor(Math.random() * 3)];
       
        let message = `You chose: ${input}\nComputer chose: ${computerInput}\n\n`;

        if (input === computerInput) {
            message += "It's a draw!";
        } else if (
            (input === 'S' && computerInput === 'W') ||
            (input === 'W' && computerInput === 'G') ||
            (input === 'G' && computerInput === 'S') 
        ) {
            message += "🎉 You Win!";
        } else {
            message += "🥲 You Lose!";
        }
        alert(message);
        playAgain = confirm("Do you want to play again?");
    }
}

playGame();

// make a seperate html file where paste this below html code and 
// name the js file what you want and put exactly same in the script tag
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//  <p>This is a browser based Snake, Water, Gun Game
//  </p>
//     <script src="Enter your javascript file name">
//     </script>
// </body>
// </html>