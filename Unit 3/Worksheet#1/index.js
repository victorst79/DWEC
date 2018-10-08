// WS#1: 2,3,6,7
document.write("<h1>Worksheet#1 - Unit 3</h1>");

document.write("<h2>Exercise 2</h2>");

function lanzamiento() {
    let result = parseInt(Math.random()*6)+1
    console.log(result);
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
        }else if
    }
}