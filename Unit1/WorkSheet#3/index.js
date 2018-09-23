document.write("<h1>WorkSheet#3</h1>");
document.write("<h3>Exercise 1</h3>");

function tellFortune(n_childrens,name,ubication,job){
    document.write("You will be a " + job + " in " + ubication + ", and married to " + name + " with " + n_childrens + " kids.<br>");
}

tellFortune(5,"Veronica","Spain","Programmer");
tellFortune(2,"Paco","Germany","Customer");
tellFortune(1,"Billy","Sweeden","Photographer");

document.write("<h3>Exercise 2</h3>");

function calculateAge(b_year,c_year){
    document.write("Current year: " + c_year);
    document.write("<br>");
    document.write("Birth year: " + b_year);
    document.write("<br>");
    document.write("You are either " + (c_year-b_year-1) + " or " + (c_year-b_year));
    document.write("<br><br>");
}

calculateAge(1997,2018);
calculateAge(1985,2018);
calculateAge(1966,2018);

document.write("<h4>Exercise 2 - BONUS</h4>");

function calculateAgeBonus(b_year){
    var year = new Date().getFullYear;
    document.write("Current year: " + year);
    document.write("<br>");
    document.write("Birth year: " + b_year);
    document.write("<br>");
    document.write("You are either " + (year-b_year-1) + " or " + (year-b_year));
}

calculateAge(1997,2018);

document.write("<h3>Exercise 3</h3>");

function calculateSupply(age,amount_per_day){
    var life_expectancy = 71;
    document.write("Age: " + age);
    document.write("<br>");
    document.write("Amount per day: " + amount_per_day);
    document.write("<br>");
    document.write("You will need "+ (life_expectancy-age)*amount_per_day +" to last you until the ripe old age of " + life_expectancy);
    document.write("<br><br>");
}

calculateSupply(21,3);
calculateSupply(30,5);
calculateSupply(5,10);

document.write("<h4>Exercise 3 - BONUS</h4>");

function calculateSupplyBonus(age,amount_per_day){
    var life_expectancy = 71;
    document.write("Age: " + age);
    document.write("<br>");
    document.write("Amount per day: " + amount_per_day);
    document.write("<br>");
    document.write("You will need "+ ((life_expectancy-age)*amount_per_day).toFixed(0) +" to last you until the ripe old age of " + life_expectancy);
    document.write("<br><br>");
}

calculateSupplyBonus(21,3.532);

document.write("<h3>Exercise 4</h3>");

function calcCircumference(radius){
    var result = (radius*2)*Math.PI;
    document.write("The circumference is " + result + "<br>");
}

function calcArea(radius){
    var result = Math.PI*(radius*radius);
    document.write("The area is " + result + "<br>");
}

calcCircumference(2);
calcArea(4);

document.write("<h3>Exercise 5</h3>");

function celsiusToFahrenheit(celsius){
    document.write(celsius + " °C is " + ((celsius*1.8000)+32.00) + " °F<br>");
}

celsiusToFahrenheit(20);

function fahrenheitToCelsius(fahrenheit){
    document.write(fahrenheit  + " °F is " + (fahrenheit-32)/1.8000 + " °C<br>");    
}

fahrenheitToCelsius(78);