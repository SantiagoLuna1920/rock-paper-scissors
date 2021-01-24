let humanWins=0;
let computerWins=0;
let bandHuman=false;
let bandComputer=false;

function computerPlayer () {
    let result = Math.floor(Math.random()*(4-1)+1);
    return result;
}

function winRound(playerSelection,computerSelection) {
    if (bandHuman===true) {
        document.getElementById("imgHumanS").innerHTML="";
        bandHuman=false;
    }
    if (bandComputer===true) {
        document.getElementById("imgComputerS").innerHTML="";
        bandComputer=false;
    }
    switch (playerSelection) {
        case 1: if(computerSelection===2) {
            humanWins++;
            /* alert("Ganaste")  class="animation"*/
            document.getElementById("congratulations").innerHTML=`<p>Ganaste esta ronda</p>`//papel
            document.getElementById("imgHuman").innerHTML=`<img src="https://i.pinimg.com/originals/f2/9a/99/f29a995653ff0658cfcef654708a02fd.png" width="100px" height="100px" alt="">`
            document.getElementById("imgComputer").innerHTML=`<img src="https://i.pinimg.com/originals/70/90/60/709060bebc6958a3412eb23b1f1da537.png" width="100px" height="100px" alt="">`
            document.getElementById("imgHumanS").innerHTML=`<h2>Score:</h2>
            <p style="font-size: 40px;" class="pScore">
                ${humanWins}/5
            </p> `
        } else if (computerSelection===3) {
            computerWins++;
            /* alert("perdiste") */
            document.getElementById("congratulations").innerHTML=`<p>Perdiste esta ronda</p>`
            document.getElementById("imgHuman").innerHTML=`<img src="https://i.pinimg.com/originals/f2/9a/99/f29a995653ff0658cfcef654708a02fd.png" width="100px" height="100px" alt="">`
            document.getElementById("imgComputer").innerHTML=`<img src="https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2bd0.png" width="100px" height="100px" alt="">`
            document.getElementById("imgComputerS").innerHTML=`<h2>Score:</h2>
            <p style="font-size: 40px;" class="pScore">
                ${computerWins}/5
            </p> `
        } else {
            // alert("Empates")
            document.getElementById("congratulations").innerHTML=`<p>Empatas en esta ronda</p>`
            document.getElementById("imgHuman").innerHTML=`<img src="https://i.pinimg.com/originals/f2/9a/99/f29a995653ff0658cfcef654708a02fd.png" width="100px" height="100px" alt="">`
            document.getElementById("imgComputer").innerHTML=`<img src="https://i.pinimg.com/originals/f2/9a/99/f29a995653ff0658cfcef654708a02fd.png" width="100px" height="100px" alt="">`
        }
        break;
        case 2: if(computerSelection===2) {
            document.getElementById("congratulations").innerHTML=`<p>Empatas en esta ronda</p>`//piedra
            document.getElementById("imgHuman").innerHTML=`<img src="https://i.pinimg.com/originals/70/90/60/709060bebc6958a3412eb23b1f1da537.png" width="100px" height="100px" alt="">`
            document.getElementById("imgComputer").innerHTML=`<img src="https://i.pinimg.com/originals/70/90/60/709060bebc6958a3412eb23b1f1da537.png" width="100px" height="100px" alt="">`
        } else if (computerSelection===3) {
            humanWins++;
            document.getElementById("congratulations").innerHTML=`<p>Ganaste esta ronda</p>`
            document.getElementById("imgHuman").innerHTML=`<img src="https://i.pinimg.com/originals/70/90/60/709060bebc6958a3412eb23b1f1da537.png" width="100px" height="100px" alt="">`
            document.getElementById("imgComputer").innerHTML=`<img src="https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2bd0.png" width="100px" height="100px" alt="">`
            document.getElementById("imgHumanS").innerHTML=`<h2>Score:</h2>
            <p style="font-size: 40px;" class="pScore">
                ${humanWins}/5
            </p> `
        } else {
            computerWins++;
            document.getElementById("congratulations").innerHTML=`<p>Perdiste esta ronda</p>`
            document.getElementById("imgHuman").innerHTML=`<img src="https://i.pinimg.com/originals/70/90/60/709060bebc6958a3412eb23b1f1da537.png" width="100px" height="100px" alt="">`
            document.getElementById("imgComputer").innerHTML=`<img src="https://i.pinimg.com/originals/f2/9a/99/f29a995653ff0658cfcef654708a02fd.png" width="100px" height="100px" alt="">`
            document.getElementById("imgComputerS").innerHTML=`<h2>Score:</h2>
            <p style="font-size: 40px;" class="pScore">
                ${computerWins}/5
            </p> `
        }
        break;
        case 3: if(computerSelection===2) {
            computerWins++;
            document.getElementById("congratulations").innerHTML=`<p>Perdiste esta ronda</p>`//papel
            document.getElementById("imgHuman").innerHTML=`<img src="https://assets.stickpng.https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2bd0.png" width="100px" height="100px" alt="">`
            document.getElementById("imgComputer").innerHTML=`<img src="https://i.pinimg.com/originals/70/90/60/709060bebc6958a3412eb23b1f1da537.png" width="100px" height="100px" alt="">`
            document.getElementById("imgComputerS").innerHTML=`<h2>Score:</h2>
            <p style="font-size: 40px;" class="pScore">
                ${computerWins}/5
            </p> `
        } else if (computerSelection===3) {
            document.getElementById("congratulations").innerHTML=`<p>Empatas en esta ronda</p>`//tijera
            document.getElementById("imgHuman").innerHTML=`<img src="https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2bd0.png" width="100px" height="100px" alt="">`
            document.getElementById("imgComputer").innerHTML=`<img src="https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2bd0.png" width="100px" height="100px" alt="">`
        } else {
            humanWins++;
            document.getElementById("congratulations").innerHTML=`<p>Ganaste esta ronda</p>`
            document.getElementById("imgHuman").innerHTML=`<img src="https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2bd0.png" width="100px" height="100px" alt="">`
            document.getElementById("imgComputer").innerHTML=`<img src="https://i.pinimg.com/originals/f2/9a/99/f29a995653ff0658cfcef654708a02fd.png" width="100px" height="100px" alt="">`
            document.getElementById("imgHumanS").innerHTML=`<h2>Score:</h2>
            <p style="font-size: 40px;" class="pScore">
                ${humanWins}/5
            </p> `
        }
        break;
    }
    if (humanWins===5 || computerWins===5) {
        if(humanWins===5) {
            document.getElementById("congratulations").innerHTML=`<p class="animation">Ganaste esta partida, felicidades!</p>`
        bandHuman=true;
        humanWins=0;
        computerWins=0;
        bandComputer=true;
        }
        if (computerWins===5) {
            document.getElementById("congratulations").innerHTML=`<p class="animation">Has perdido esta partida.</p>`
        computerWins=0;
        humanWins=0;
        bandComputer=true;
        bandHuman=true;
        }
    }
}

function game(value) {
    winRound(value,computerPlayer());
}