document.write("<h1>Worksheet#6</h1>");

document.write("<h3>Exercise 1</h3>");

function sumAll(param1,param2,param3){
    document.write("<p>"+ (param1+param2+param3) +"</p>");
}

var params = [5,5,5];
sumAll(...params);

document.write("<h3>Exercise 2</h3>");

function addOnlyNums(...arguments){
    let sum = 0;
    for(let i = 0; i <= arguments.length-1;i++){
        if( typeof arguments[i] === 'number'){
            sum = sum+arguments[i];
        }else{
            alert("Invalid character");
        }
    }
    document.write("<p>" + sum + "</p>");
}

addOnlyNums(5,5,5,2,6,9,8,10);

document.write("<h3>Exercise 3</h3>");

function countTheArgs(...args){
    var cont = 0;
    for(let i = 0;i <= arguments.length-1;i++){
        cont++;
    }
    document.write(cont);
    return cont;    
}

countTheArgs(1,2,'hi','again');

document.write("<h3>Exercise 4</h3>");

function combineTwoArrays(...params){
    var aparam = [];
    for(let i = 0; i <= arguments.length-1; i++){
        aparam.push(arguments[i]);
    }
    return aparam;
}

console.log(combineTwoArrays([1,2,'hola',6],[21,true]));

document.write("<h3>Exercise 5</h3>");

function sumEveryOther(){

}

document.write("<h3>Exercise 6</h3>");

function onlyUniques(){
    
}