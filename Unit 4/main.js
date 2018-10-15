// WS#1 --> 1,2,4,5,9,10

// Exercise 1
function alert1(){
    alert("OnClick in Button");
}

document.getElementById("alert1").onclick = alert1;

// Exercise 2
function positionMouse(event){
    x = event.clientX;
    y = event.clientY;

    document.getElementById("x").textContent = x;
    document.getElementById("y").textContent = y;
}

// Exercise 4
function draw(){
    document.write("<table cellspacing='0' border='1px solid black'>");
    for(let i = 0; i <= 19; i++){
        document.write("<tr>");
        for(let j = 0; j <= 19; j++){
            document.write("<td onmouse='color(this);'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>");
        }
        document.write("</tr>");
    }    
    document.write("</table>");
}

function color(square) {
    if (event.shiftKey == true) {
        this.style.backgroundColor = "blue";
    }else if (event.ctrlKey == true) {
        this.style.backgroundColor = "red";
    }
}

draw();

// Excercise 5

// Exercise 9