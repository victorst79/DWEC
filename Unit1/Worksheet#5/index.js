document.write("<h1>Worksheet#5</h1>");

document.write("<h3>Exercise 10</h3>");

for(let i = 1; i <= 6; i++){
    document.write("<h"+i+">Header h"+i+"</h"+i+">");
}

document.write("<h3>Exercise 11</h3>");

var n_col = prompt("Column Number");
var height = prompt("Height in px");
var width = prompt("width in px");

document.write("<table cellspacing='2' border='1px solid black'>");
document.write("<tr height='" + height + "'>");    
for(let i = 0; i <= n_col - 1; i++){
    document.write("<td width='" + width + "'>a &nbsp</td>");    
}
document.write("</tr>");    
document.write("</table>");

document.write("<h3>Exercise 12</h3>");

var n_col = prompt("Column Number");
var height = prompt("Height in px");
var width = prompt("width in px");

document.write("<table cellspacing='2' border='1px solid black'>");
document.write("<tr height='" + height + "'>");    
for(let i = 0; i <= n_col - 1; i++){
    if(i%2 == 0){
        document.write("<td bgcolor='white' width='" + width + "'>&nbsp</td>");
    }else{
        document.write("<td bgcolor='black' width='" + width + "'>&nbsp</td>");
    }
}
document.write("</tr>");    
document.write("</table>");

document.write("<h3>Exercise 13</h3>");

var n_col = prompt("Column Number");
var height = prompt("Height in px");
var width = prompt("width in px");
var i = 1;
document.write("<table cellspacing='2' border='1px solid black'>");
document.write("<tr height='" + height + "'>");
while(i <= n_col){
    document.write("<td width='" + width + "'>a &nbsp</td>");
    i++;
}
document.write("</tr>");    
document.write("</table>");

document.write("<h3>Exercise 14</h3>");

var n_col = prompt("Column Number");
var height = prompt("Height in px");
var width = prompt("width in px");
var j = 1;
document.write("<table cellspacing='2' border='1px solid black'>");
document.write("<tr height='" + height + "'>");
while(j <= n_col){
    if(j%2 == 0){
        document.write("<td bgcolor='white' width='" + width + "'>&nbsp</td>");
    }else{
        document.write("<td bgcolor='black' width='" + width + "'>&nbsp</td>");
    }
    j++;
}
document.write("</tr>");    
document.write("</table>");

document.write("<h3>Exercise 15</h3>");

var num_adivinar = parseInt(prompt("Number to guess"));
var num = parseInt(prompt("Number"));

if(num_adivinar != num){
    while(num_adivinar != num){
        if(num < num_adivinar){
            alert("Try again, the number you are looking for is greater.");
            num = parseInt(prompt("Number"));
        }else if(num > num_adivinar){
            alert("Try again, the number you are looking for is less.");
            num = parseInt(prompt("Number"));
        }
    }
}else{
    alert("Congratulations");
    document.write("You win this game");
}

document.write("<h3>Exercise 16</h3>");

var num_adivinar2 = parseInt(prompt("Number to guess"));
var num2 = parseInt(prompt("Number"));

if(num_adivinar2 != num2){
    do{
        if(num2 < num_adivinar2){
            alert("Try again, the number you are looking for is greter.");
            num2 = parseInt(prompt("Number"));
        }else if(num2 > num_adivinar2){
            alert("Try again, the number you are looking for is less.");
            num2 = parseInt(prompt("Number"));
        }
    }while(num_adivinar2 != num2);
}else{
    alert("Congratulations");
    document.write("You win this game");
}

document.write("<h3>Exercise 17</h3>");

for(let i = 0;i <= 10;i++){
    document.write("<h2>Multiplication table of "+i+" </h2>");
    for(let j = 0;j <= 10;j++){
        let result = i*j;
        document.write(i + " x " + j  + " = " + result + "<br>");
    }
    document.write("<br>");
}

document.write("<h3>Exercise 18</h3>");

var n_col2 = prompt("Number of column");
var n_row2 = prompt("Number of row");
var height2 = prompt("Height in px");
var width2 = prompt("Width in px");

document.write("<table border='1px solid black' cellspading='2' bgcolor='black'>");
for(let i = 1; i <= n_col2;i++){
    document.write("<tr height='"+ height2 +"' bgcolor='white'");
    for(let j = 1; j <= n_row2;j++){
        document.write("<td width='"+ width2 +"'>&nbsp;</td>");
    }
    document.write("</tr>");
}
for(let i = 1; i <= n_col2;i++){
    document.write("<tr height='"+ height2 +"' bgcolor='white'");
    for(let j = 1; j <= n_row2;j++){
        document.write("<td width='"+ width2 +"'>&nbsp;</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

document.write("<h3>Exercise 19</h3>");

var wah = prompt("Width and Height");

document.write('<table border="0" cellspading="2" bgcolor="black">');
for(var i=1; i<=8; i++){
    document.write('<tr bgcolor="white" height="'+wah+'">');
    if(i%2!=0){
        for(var j=1; j<=8; j++){
            if(j%2!=0){
                document.write('<td width="'+wah+'" bgcolor="black">&nbsp;</td>');
            }else{
                document.write('<td width="'+wah+'" bgcolor="white">&nbsp;</td>');
            }
        }
    }else{
        for(var z=1; z<=8; z++){
            if(z%2==0){
                document.write('<td width="'+wah+'" bgcolor="black">&nbsp;</td>');
            }else{
                document.write('<td width="'+wah+'" bgcolor="white">&nbsp;</td>');
            }
        }
    }
    document.write('</tr>');
}
document.write('</table>');