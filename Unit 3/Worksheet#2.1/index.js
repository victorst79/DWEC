document.write("<h1>Worksheet#2.1</h1>");

var arrNaM  = [10,85,1,87,987,5,0,14,20];
var arrNaM2  = ["Hello","World","And","github","viewers","good","morning","for","all","is","fisionomy"];

document.write("<h3>a)</h3>");
document.write("SEE RESULTS IN THE CONSOLE");

function findLargestNumber(arr){
    return arr.sort().slice(-1);
}

console.warn("a)");
console.log(findLargestNumber(arrNaM));


document.write("<h3>b)</h3>");
document.write("SEE RESULTS IN THE CONSOLE");

function findLongestString(arr){
    return arr.sort(function(a,b){
        if(a.length > b.length){
            return 1;
        }else if(a.length < b.length){
            return -1;
        }else{
            return 0;
        }
    }).slice(-1);
}

console.warn("b)");
console.log(findLongestString(arrNaM2));


document.write("<h3>c)</h3>");
document.write("SEE RESULTS IN THE CONSOLE");

function findEvenNumber(arr){
    var even = [];

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] % 2 == 0){
            even.push(arr[i]);
        }
    }
    return even;
}

console.warn("c)");
console.log(findEvenNumber(arrNaM));


document.write("<h3>d)</h3>");
document.write("SEE RESULTS IN THE CONSOLE");

function findOodNumber(arr){
    var odd = [];

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] % 2 != 0){
            odd.push(arr[i]);
        }
    }
    return odd;
}

console.warn("d)");
console.log(findOodNumber(arrNaM));

// ?????????????????????????????????????????
document.write("<h3>e)</h3>");
document.write("IN PROGRESS");

function wordsContainIs(arr){
    return arr.includes("is");
}

console.warn("e)");
console.log(wordsContainIs(arrNaM2));

document.write("<h3>f)</h3>");
document.write("SEE RESULTS IN THE CONSOLE");