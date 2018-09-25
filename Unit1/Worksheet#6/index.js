document.write("<h1>Worksheet#6</h1>");

document.write("<h3>Exercise 1</h3>");

function sumAll(param1,param2,param3){
    document.write("<p>"+ (param1+param2+param3) +"</p>");
}

var params = [5,5,5];
sumAll(...params);

document.write("<h3>Exercise 2</h3>");

function addOnlyNums(...arguments){
    var sum = 0;
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

