// Randomizer initial position
document.getElementById("ball").setAttribute("cx",parseInt(Math.random()*760)+20);
document.getElementById("ball").setAttribute("cy",parseInt(Math.random()*360)+20);

var ball = document.getElementById("ball");
var gametable = document.getElementById("gametable");
var speedX = 1;
var speedY = 1;

// Limit the X axis with the width of the gameboard
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

// Limit the Y axis with the height of the gameboard
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
    positionY();
    positionX();
}, 10);