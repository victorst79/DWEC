// WS#2 --> 5,7,9
// WS#2.1

document.write("<h1>Worksheet#2</h1>");

document.write("<h3>Exercise 5</h3>");

function paresImpares(){
    var arr = Array();
    var odd = Array();
    var even = Array();

    for(let i = 0; i <= 99; i++){
        arr.push(parseInt(Math.random()*1000+1));
    }

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i]%2 == 0){
            even.push(arr[i]);
        }else{
            odd.push(arr[i]);
        }
    }

    console.warn("ARRAY");
    console.log(arr);
    console.warn("ODD");
    console.log(odd);
    console.warn("EVEN");
    console.log(even);
}

paresImpares();
document.write("See in the console");

document.write("<h3>Exercise 7</h3>");

var arrTest = [1,2,3,4,5,6,7,8,9,10];
var arrTest2 = [1,2,3,4,5,6,7,8,9,10,"Hola",true];

function allValue0(arr){    
    for(let i = 0; i <= arr.length-1; i++){
        arr[i] = 0;
    }
    return arr;
}

function add1(arr){
    for(let i = 0; i <= arr.length-1;i++){
        arr[i] = arr[i]+"1";
    }
    return arr;
}

function showArray(arr){
    for(let i = 0; i <= arr.length-1;i++){
        document.write(" " + arr[i] + " ");
    }
}

console.warn("a)");
console.log(allValue0(arrTest));

console.warn("b)");
console.log(add1(arrTest2));

console.warn("c)");
showArray(arrTest2);

document.write("<h3>Exercise 9</h3>");

