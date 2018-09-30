document.write("<h1>Worksheet#2</h1>");

document.write("<h3>Exercise 1</h3>");
document.write("Random number between 0 and 1:<br>");
document.write(Math.random());
document.write("<br><br>");

document.write("Random number between 100 and 200:<br>");
document.write(parseInt((Math.random()*100)+100));
document.write("<br><br>");

var num1 = parseInt(prompt("Insert number"));
var num2 = parseInt(prompt("Insert number"));

function randomNumber(num1,num2){
    if(num1 > num2){
        document.write("Random number between " + num1 + " and " + num2 + ":<br>");
        document.write(parseInt((Math.random() * (num2 - num1) + num1)));
        document.write("<br><br>");
    }else if(num1 < num2){
        document.write("Random number between " + num1 + " and " + num2 + ":<br>");
        document.write(parseInt((Math.random() * (num1 - num2) + num2)));
        document.write("<br><br>");
    }else{
        document.write("Same value");
    }
}

randomNumber(num1,num2);

document.write("<h3>Exercise 5</h3>");

function equation(a,b,c){
    var solve1 = (-b+(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);
    var solve2 = (-b-(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);
    document.write(solve1+"<br>");
    document.write(solve2+"<br>");
}

equation(2,-7,3);

document.write("<h3>Exercise 7</h3>");

document.write("<table cellspacing='2' border='1px solid black'>");
document.write("<tr>");
document.write("<td>Value</td><td>Math.sin()</td>");
document.write("</tr>");
for(let i = 0; i <= 10; i++){
    document.write("<tr>");
        document.write("<td>"+ i +"</td><td>"+ Math.sin(i) +"</td>");
    document.write("</tr>");    
}
document.write("</table>");

document.write("<h3>Exercise 8</h3>");

var aux = parseInt(Math.random()*(4-1)+1);
document.write("<img src='./img/"+aux+".png'>");

// OTHER WAY
// if(aux == 1){
//     document.write("<img src=''>");
// }else if(aux == 2){
//     document.write("<img src=''>");
// }else{
//     document.write("<img src=''>");
// }

