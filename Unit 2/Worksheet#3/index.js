document.write("<h1>Worksheet#3</h1>");

document.write("<h3>Exercise 1</h3>");
document.write("<h4>A)</h4>");
function invierteCadena(cad_arg){
    document.write(cad_arg.split("").reverse().join("")+"<br>");
}

invierteCadena("Hello world");

document.write("<h4>B)</h4>");
function inviertePalabras(cad_arg){
    cad_arg = cad_arg.split(" ");
    for(let i = 0; i <= cad_arg.length-1; i++){
        document.write(cad_arg[i].split("").reverse().join("")+" ");
    }
}

inviertePalabras("Hello world, where is my dinner?");

document.write("<h4>C)</h4>");

function encuentraPalabraMasLarga(cad_arg){
    
}

encuentraPalabraMasLarga("Hello world, where is my dinner ?");