document.write("<h1>Worksheet#3</h1>");

document.write("<h3>Exercise 1</h3>");
document.write("<h4>A)</h4>");

/**
 * Receives a string, which is splitted char by char, 
 * getting an array.
 * Once this is done, our array gets inverted by reverse()
 * and later it becomes a string again. So the final result is
 * cad_arg backwards.
 * 
 * Ex: Getting "Hello World", the function will return 
 * "dlrow olleH"
 * @param {*} cad_arg 
 */
function invierteCadena(cad_arg){
    document.write(cad_arg.split("").reverse().join("")+"<br>");
}

invierteCadena("Hello world");

document.write("<h4>B)</h4>");

/**
 * Receives a string, which is composed by diferent words.
 * The array divide them using the space as the split,
 * usgin split(" ").
 * Once this is done, the array gets inverted by reverse()
 * and later it becomes a string again. So the final reuslt is 
 * car_rg backwards.
 * 
 * Ex: Getting "Hello World", the function will return 
 * "World Hello"
 * @param {*} cad_arg 
 */
function inviertePalabras(cad_arg){
    cad_arg = cad_arg.split(" ");
    for(let i = 0; i <= cad_arg.length-1; i++){
        document.write(cad_arg[i].split("").reverse().join("")+" ");
    }
}

inviertePalabras("Hello world, where is my dinner?");

document.write("<h4>C)</h4>");

/**
 * Receives a string, which gets separated word by
 * word. With a for loop it checks the length of each
 * word and saves the longest one.
 * 
 * Once the loop is done, the function prints the longest
 * word.
 * @param {*} cad_arg 
 */
function encuentraPalabraMasLarga(cad_arg){
    var arr = cad_arg.split(" ");
    var auxArr = 0;
    var big = 0;

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i].length > auxArr){
            auxArr = arr[i].length;
            big = i;
        }
    }
    document.write(arr[big]);
}

encuentraPalabraMasLarga("Hello world , where is my dinner ?");

document.write("<h4>D)</h4>");


/**
 * Receives a string and a number (mínimun size of word).
 * After that, the split() method makes an array with our
 * string with space as split.
 * We made a for bucle to find which words are longer
 * than the number.
 * @param {*} cad_arg
 * @param {*} i
 */
function fltraPalabrasMasLargas(cad_arg, i){
    var arr = cad_arg.split(" ");
    for(let j = 0; j <= arr.length-1; j++){
        if(arr[j].length > i){
            document.write(arr[j]+" ");
        }
    }
}

fltraPalabrasMasLargas("Hello world , where is my dinner ?",2);

document.write("<h4>E)</h4>");

/**
 * Receives a string, we do an array with it.
 * After that me make a for bucle to make the 
 * first letter a capital letter.
 * 
 * Ex: Gettin "hello world", the function will return
 * "Hello world".
 * @param {*} cad_arg
 */
function cadenaBienFormada(cad_arg){
    var arr = cad_arg;
    for(let i = 0; i <= arr.length-1; i++){
        if(i == 0){
            document.write(arr[i].toUpperCase());   
        }else{
            document.write(arr[i]);
        }
    }
}

cadenaBienFormada("hello world");

document.write("<h3>Exercise 2</h3>");

/**
 * Receives a character, if the character
 * is an upper case return true,
 * else return false.
 * @param {*} character
 */
function upper(character){
    if(character == character.toUpperCase()){
        return true;
    }else{
        return false;
    }
}

/**
 * Receives a character, if the character
 * is a lower caser return true,
 * else return false.
 * @param {*} character
 */
function lower(character){
    if(character == character.toLowerCase()){
        return true;
    }else{
        return false;
    }
}

function textInformation(cad_arg){
    var auxUpper = 0;
    var auxLower = 0;
    for(let i = 0; i <= cad_arg.length-1; i++){
        var characterAux = cad_arg[i];
        if(upper(characterAux) == true){
            auxUpper++;
        }else if(lower(characterAux) == true){
            auxLower++;
        }
    }
    if(auxUpper >= 1 && auxLower == 0){
        document.write("Only Uppercase");
    }else if(auxLower >= 1 && auxUpper == 0){
        document.write("Only lowercase");
    }else if(auxLower >= 1 && auxUpper >= 1){
        document.write("Lower and Uppercase");
    }else{
        document.write("ERROR");
    }
}

textInformation("AAAAAAAAAAAAHHHHHH");

document.write("<h3>Exercise 7</h3>");
// Desarrolla una funcion que tomando como entrada una cadena de texto nos devuelva si es o no un palindromo. 

document.write("<h3>Exercise 9</h3>");
// Escribir un procedimiento que lea una palabra y la escriba (formateada dentro de una tabla) como se ve en la figura: 
//     Entrada: HOLA 
//     Salida: 
//     H O L A 
//     O      L 
//     L      O 
//     A L O H 