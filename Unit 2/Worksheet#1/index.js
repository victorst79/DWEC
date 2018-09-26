document.write("<h1>Worksheet#1</h1>");

document.write("<h3>Exercise 1</h3>");
document.write(new Date().getFullYear()+"<br>");
document.write((new Date().getMonth()+1) +"<br>");
document.write(new Date().getDate() +"<br>");
document.write(new Date().getHours() +"<br>");
document.write(new Date().getMinutes() +"<br>");
document.write(new Date().getSeconds() +"<br>");


document.write("<h3>Exercise 2</h3>");
var fechaHoy = new Date();
document.write(fechaHoy+"<br>");

var fecha85 = new Date();
fecha85.setDate(fechaHoy.getDate()+85);

document.write(fecha85.getDate()+"<br>");

var fecha187 = new Date();
fecha187.setDate(fechaHoy.getDate()-187);
document.write(fecha187.getDate()+"<br>");

//+2year
fecha85.setFullYear(fechaHoy.getFullYear()+2);
document.write(fecha85.getFullYear()+"<br>");

//-24hours
fecha187.setHours(fechaHoy.getHours()-24);
document.write(fecha187.getHours()+"<br>");
document.write(fecha187+"<br>");

// ws#1 --> 1,2,3,5
// ws#2 --> 1,5,7,8
// ws#3 --> 1,2,7,9
