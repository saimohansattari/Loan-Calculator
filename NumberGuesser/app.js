//  Game Function:
//  - player must guess a number between a min amd SVGFEColorMatrixElement
//  - player gets a certain amount of guesses
//  - Notify the player of the correct answer if loose
//  - Let player choose to play again

let min = 1,
    max = 10,
    winningNUm = getRandomNum(min,max),
    guessesLeft = 3;

// UI element
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//paly again event lsitner
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
  
});

// listen for guess 
guessBtn.addEventListener('click',function(){
   let guess =  parseInt(guessInput.value);
  

    //validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`please enter a number between ${min} and ${max}`,'red');
    }

    //check if Won
    if(guess === winningNUm){
        guessInput.disabled = true;
        //change border color
        guessInput.style.borderColor = 'green';
        //set message 
        setMessage(`${winningNUm} is correct, YOU WIN`,'green');

    } else{
        //Worng number
        guessesLeft -= 1;

        if(guessesLeft === 0){
            //game over - lost

            guessInput.disabled = true;
            //change border color
            guessInput.style.borderColor = 'red';
            //set message 
            setMessage(`Game over, You Lost. The correct number was ${winningNUm}`,'red');

        } else{
            //game continue  - anserworng

             //change border color
             guessInput.style.borderColor = 'red';

             //clear input
             guessInput.value = '';
             // tell user its worng number 
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red')
        }


    }

});

// //game over
// function gameOver
function gameOver(Won, msg){
    let color;
    Won === true ? color ='green' : color ='red';

    //disable input
    guessInput.disabled = true;

    //change border color
    guessInput.style.borderColor = color;
    //set text color
    message.style.color = color;
    //set message
    setMessage(msg);

    //play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

//get wiing number 
function getRandomNum(min,max){
    return (Math.floor(Math.random()*(max-min+1)+min));
}



function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

