document.write("<h1>Worksheet#1 - Unit 3</h1>");

document.write("<h2>Exercise 2</h2>");

function lanzamiento() {
    let result = parseInt(Math.random()*6)+1;
    return result;
}

document.write("<button onclick='lanzamiento()'>DICE</button>");

document.write("<h2>Exercise 3</h2>");

function simulation6k(){
    let var1 = 0;
    let var2 = 0;
    let var3 = 0;
    let var4 = 0;
    let var5 = 0;
    let var6 = 0;

    for(let i = 0; i <= 5999; i++){
        var dice = lanzamiento();

        if(dice == 1){
            var1++;
        }else if(dice == 2){
            var2++;
        }else if(dice == 3){
            var3++;
        }else if(dice == 4){
            var4++;
        }else if(dice == 5){
            var5++;
        }else if(dice == 6){
            var6++;
        }else{
            console.warn("WRONG VALUE");
        }
    }

    document.write("Number 1 --> "+var1+"<br>");
    document.write("Number 2 --> "+var2+"<br>");
    document.write("Number 3 --> "+var3+"<br>");
    document.write("Number 4 --> "+var4+"<br>");
    document.write("Number 5 --> "+var5+"<br>");
    document.write("Number 6 --> "+var6+"<br>");
}

simulation6k();

document.write("<h2>Exercise 6</h2>");

function numericalPowers(base,exponent){
    if(exponent == 0){
        return 1;
    }else{
        return base * numericalPowers(base, exponent-1);
    }
}

document.write("Recursive Numerical Powers: <br>");
document.write(numericalPowers(2,8));

document.write("<h2>Exercise 7</h2>");

function factorial(number){
    if(number == 0){
        return 1;
    }else{
        return number * factorial(number - 1);
    }
}

document.write("Factorial: <br>");
document.write(factorial(10));