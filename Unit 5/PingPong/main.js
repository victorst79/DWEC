// Randomizer initial position
document.getElementById("ball").setAttribute("cx",parseInt(Math.random()*740)+20);
document.getElementById("ball").setAttribute("cy",parseInt(Math.random()*340)+20);

// Position Player1
document.getElementById("player1").setAttribute("x",50);
document.getElementById("player1").setAttribute("y",125);

// Position Player2
document.getElementById("player2").setAttribute("x",740);
document.getElementById("player2").setAttribute("y",125);

// Declaration Variables
var ball = document.getElementById("ball");
var gametable = document.getElementById("gametable");
var speedX = 1;
var speedY = 1;
var key;
var positionPlayer1;
var positionPlayer1x;
var positionPlayer1y;

// Function movement player1
document.addEventListener("keydown",function playerMoves(event){
    key = event.keyCode;
    positionPlayer1 = parseInt(document.getElementById("player1").getAttribute("y"));
    
    if(key == 38){
        if(positionPlayer1 >= 1){
            document.getElementById("player1").setAttribute("y", positionPlayer1-5);   
        }else{
            console.log("CANT MOVE");
        }
    }
    if(key == 40){
        if((positionPlayer1+100) < 400){
            document.getElementById("player1").setAttribute("y", positionPlayer1+5);
        }else{
            console.log("CANT MOVE");
        }
    }
});

/**
* Function that checks physical collisions with the ball
*/
function collisionBall(){
    if((x - 15) == (positionPlayer1x + 15)){
        if((y >= positionPlayer1y) && (y <= (positionPlayer1y + 100))){
            speedX = Math.abs(speedX);
        }
    }

    if((x + 15) == (positionPlayer1x + 15)){
        if((y >= positionPlayer1y) && (y <= (positionPlayer1y + 100))){
            speedX = speedX * (-1);
        }
    }
    ball.setAttribute("cx", x + speedX);
}

/**
* Limit the X axis with the width of the gameboard
*/
function positionX(){
    if(x >= parseInt(gametable.getAttribute("width"))-20){
        speedX = speedX * (-1);
    }
    if(x <= 20){
        // Use of absolute values to reuse positive numbers.
        speedX = Math.abs(speedX);
    } 
    ball.setAttribute("cx", x + speedX);
}

/**
* Limit the Y axis with the height of the gameboard
*/
function positionY(){
    if(y >= parseInt(gametable.getAttribute("height"))-20){
        speedY = speedY * (-1);
    }
    if(y <= 20){
        // Use of absolute values to reuse positive numbers.
        speedY = Math.abs(speedY);
    }
    ball.setAttribute("cy", y + speedY);
}


setInterval( () => {
    x = parseInt(ball.getAttribute("cx"));
    y = parseInt(ball.getAttribute("cy"));

    positionPlayer1x = parseInt(document.getElementById("player1").getAttribute("x"));
    positionPlayer1y = parseInt(document.getElementById("player1").getAttribute("y"));

    positionY();
    positionX();
    collisionBall();
}, 1);