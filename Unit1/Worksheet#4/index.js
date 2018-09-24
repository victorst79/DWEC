document.write("<h1>WorkSheet#4</h1>");

document.write("<h3>Exercise 1</h2>");

function greaterNum (n1,n2){
    if(n1 > n2){
        document.write(n1 + " its bigger than " + n2);
    }else if(n2 > n1){
        document.write(n2 + " its bigger than " + n1);
    }else{
        document.write("Both numbers are equals");
    }
    document.write("<br>");
}

greaterNum(prompt("Numero 1"),prompt("Numero 2"));
greaterNum(prompt("Numero 1"),prompt("Numero 2"));

document.write("<h3>Exercise 2</h3>");

function helloWorld(msg){
    if(msg == 'es'){
        document.write("Hola Mundo");
    }else if(msg == 'en'){
        document.write("Hello World");
    }else if(msg == 'de'){
        document.write("Hallo Welt");
    }else{
        document.write("Invalid Argument");
    }
}

helloWorld(prompt("Languaje"));
