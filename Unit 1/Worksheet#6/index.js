document.write("<h1>Worksheet#6</h1>");

document.write("<h3>Exercise 1</h3>");

function sumAll(...param){
    var sum = 0;   
    for(let i = 0; i <= arguments.length-1;i++){
        sum+=arguments[i];
    }
    document.write("<p>"+ sum +"</p>");
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
//     another solution 
    let arr1 = [1,"2",3,"4",5,6]
const addOnlyNums = (nums)=>{
  for(num of nums){
    Number(num);
    return nums.reduce((a,b) =>Number(a) + Number(b));
    
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

function combineTwoArrays(a1,a2){
    return [...a1,...a2];
}

console.log(combineTwoArrays([1,2,'hola',6],[21,true]));

document.write("<h3>Exercise 5</h3>");

function sumEveryOther(...valores){
    let array = [];
    for (let i = 0; i <= valores.length-1; i++) {
        if (!array.includes(valores[i])) {
            array.push(valores[i]);
        }        
    }
    return array;
}

console.log(sumEveryOther(5,3,9,82,3));

document.write("<h3>Exercise 6</h3>");

function onlyUniques(){
    
}

document.write("<h3>Exercise 7</h3>");

function combineAllArrays(...params){
    let aux = [];
    for (let i = 0; i < params.length; i++) {
        // aux = [...aux, params[i]];  
        aux.push(...params[i]);
    }
    return aux;
}

console.log(combineAllArrays([5,6,9,7],[8,9,25],[90,56,35],[true]));
