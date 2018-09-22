// WS#2 --> 3,4,1
document.write("<h1>WhorkSheet#2</h1>");
document.write("<h3>Exercise 3</h3>");
var radius = 5;
document.write("El radio del circulo es : " + radius);
document.write("<br>");
var circumference = 2*Math.PI*radius;
document.write("El perimetro de la circunferencia es 2 x π x Radio = " + circumference);
document.write("<br>");
var area = Math.PI*radius*radius;
document.write("El area de la circunferencia es π x Radio^2 = " + area);
document.write("<br>");

document.write("<h3>Exercise 2</h3>");
var celsius = 15;
document.write("Celsius = " + celsius);
document.write("<br>");
var fahrenheit = celsius*1.8000+32.00
document.write(celsius + "C to Fahrenheit = " + fahrenheit);
document.write("<br><br>");
var f = 50;
document.write("Fahrenheit = " + f);
document.write("<br>");
var c = ((f-32)/1.8000);
document.write(f + "F to Celsius = " + c);
document.write("<br>");

document.write("<h1>WhorkSheet#2 OPTIONALS</h1>");
document.write("<h3>Exercise 1</h3>");
var age = 2018;
var friend_age = 1992;
document.write("Current year: " + age);
document.write("<br>");
document.write("Age of my friend: " + friend_age);
document.write("<br>");
document.write("The age of my friend is between " + (age-friend_age-1) + " or " + (age-friend_age) + " years");