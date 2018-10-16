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

// Exercise 4 and 5
function draw(){
    document.write("<table cellspacing='0' border='1px solid black'>");
    for(let i = 0; i <= 19; i++){
        document.write("<tr height='20'>");
        for(let j = 0; j <= 19; j++){
            document.write("<td id='square' onmousemove='color(event)' height='20' width='20'></td>");
        }
        document.write("</tr>");
    }    
    document.write("</table>");
    document.write("<button onclick='deletColor()'>Clear</button>");
}

function color(event) {
    if(event.shiftKey) {
        event.target.style.backgroundColor = "blue";
    }
    if(event.ctrlKey) {
        event.target.style.backgroundColor = "red";
    }
    if(event.altKey){
        event.target.style.backgroundColor = "white";
    }
}

function deletColor(){
    var square = document.getElementById("square");
}

draw();

// Exercise 9
