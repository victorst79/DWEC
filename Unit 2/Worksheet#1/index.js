document.write("<h1>Worksheet#1</h1>");

document.write("<h3>Exercise 1</h3>");
document.write(new Date().getFullYear()+"<br>");
document.write((new Date().getMonth()+1) +"<br>");
document.write(new Date().getDate() +"<br>");
document.write(new Date().getHours() +"<br>");
document.write(new Date().getMinutes() +"<br>");
document.write(new Date().getSeconds() +"<br>");


document.write("<h3>Exercise 2</h3>");
var fechaHoy = new Date();
document.write(fechaHoy+"<br>");

var fecha85 = new Date();
fecha85.setDate(fechaHoy.getDate()+85);

document.write(fecha85+"<br>");

var fecha187 = new Date();
fecha187.setDate(fechaHoy.getDate()-187);
document.write(fecha187+"<br>");

//+2year
fecha85.setFullYear(fechaHoy.getFullYear()+2);
document.write(fecha85+"<br>");

//-24hours
fecha187.setHours(fechaHoy.getHours()-24);
document.write(fecha187+"<br>");

var fechaResto = fecha85 - fecha187;
document.write(fechaResto+"<br>");

document.write("<h3>Exercise 3 and 4</h3>");
var example_time = 60;
document.write(example_time);

function acountant(){
    document.write(example_time+"<br>");
    example_time--;
    if(example_time >= 0){
        setTimeout(acountant,1000);
    }else{
        window.location.replace("http://google.com");
    }
}

// acountant();

document.write("<h3>Exercise 5</h3>");


function clock(){
    var hour = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    document.write(hour + " : " + minutes + " : " + seconds + "<br>");
    setTimeout(clock,1000);
}

// clock();

