// document.write("<h1>Worksheet#5</h1>");

// document.write("<h3>Exercise 10</h3>");

// for(let i = 1; i <= 6; i++){
//     document.write("<h"+i+">Header h"+i+"</h"+i+">");
// }

// document.write("<h3>Exercise 11</h3>");

// var n_col = prompt("Column Number");
// var height = prompt("Height in px");
// var width = prompt("width in px");

// document.write("<table cellspacing='2' border='1px solid black'>");
// document.write("<tr height='" + height + "'>");    
// for(let i = 0; i <= n_col - 1; i++){
//     document.write("<td width='" + width + "'>a &nbsp</td>");    
// }
// document.write("</tr>");    
// document.write("</table>");

// document.write("<h3>Exercise 12</h3>");

// var n_col = prompt("Column Number");
// var height = prompt("Height in px");
// var width = prompt("width in px");

// document.write("<table cellspacing='2' border='1px solid black'>");
// document.write("<tr height='" + height + "'>");    
// for(let i = 0; i <= n_col - 1; i++){
//     if(i%2 == 0){
//         document.write("<td bgcolor='white' width='" + width + "'>&nbsp</td>");
//     }else{
//         document.write("<td bgcolor='black' width='" + width + "'>&nbsp</td>");
//     }
// }
// document.write("</tr>");    
// document.write("</table>");

// document.write("<h3>Exercise 13</h3>");

// var n_col = prompt("Column Number");
// var height = prompt("Height in px");
// var width = prompt("width in px");
// var i = 1;
// document.write("<table cellspacing='2' border='1px solid black'>");
// document.write("<tr height='" + height + "'>");
// while(i <= n_col){
//     document.write("<td width='" + width + "'>a &nbsp</td>");
//     i++;
// }
// document.write("</tr>");    
// document.write("</table>");

// document.write("<h3>Exercise 14</h3>");

// var n_col = prompt("Column Number");
// var height = prompt("Height in px");
// var width = prompt("width in px");
// var j = 1;
// document.write("<table cellspacing='2' border='1px solid black'>");
// document.write("<tr height='" + height + "'>");
// while(j <= n_col){
//     if(j%2 == 0){
//         document.write("<td bgcolor='white' width='" + width + "'>&nbsp</td>");
//     }else{
//         document.write("<td bgcolor='black' width='" + width + "'>&nbsp</td>");
//     }
//     j++;
// }
// document.write("</tr>");    
// document.write("</table>");

document.write("<h3>Exercise 15</h3>");

var num_adivinar = prompt("Number to guess");
var num = prompt("Number");

while(num != num_adivinar){
    if(num < num_adivinar){
        num = prompt("Try again, the number you are looking for is greater.");
    }else if(num > num_adivinar){
        num = prompt("Try again, the number you are looking for is less.");
    }else{
        alert("Congratulations");
    }
}

