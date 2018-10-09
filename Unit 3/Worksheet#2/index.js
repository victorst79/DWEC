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

function arrModify(){

}