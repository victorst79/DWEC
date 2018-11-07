function ejercicio2(){
    var enlaces = [...document.getElementsByTagName("a")];

    if(enlaces.length > 0){
        document.getElementById("sol2").innerHTML ="<h3>En esta pagina hay "+enlaces.length+" enlaces.</h3>";
        for(let i = 0; i <= enlaces.length-1; i++){
            document.write("<h4>El "+i+"º enlace redirecciona a "+ enlaces[i].getAttribute("href") +"</h4>");
        }
    }else{
        console.log("No existen enlaces en esta pagina");
    }
}

// ejercicio2();

function ejercicio3(url,x){
    var date = new Date();
    var segundos = date.getSeconds();
    console.log(url);
    if(segundos == 0){
        location.href = url;
    }
    document.getElementById("contador").innerText = segundos;
}

// ejercicio3("https://developer.mozilla.org",1);

function ejercicio5(idTable){
    
    if( idTable == null){
        console.log("ID NO EXISTE");
    }else{
        document.querySelector("#"+idTable+" tr:first-child").style.color = "red";    

        var pares = [...document.querySelectorAll("#"+idTable+" tr:nth-child(odd)")];
        var impares = [...document.querySelectorAll("#"+idTable+" tr:nth-child(even)")];

        if(pares.length != 0){
            for(let i = 0; i <= pares.length-1; i++){
                pares[i].style.background = "green";
            }
        }
        if(impares.length != 0){
            for(let j = 0; j <= impares.length-1; j++){
                impares[j].style.background = "orange";
            }
        }
        
    }
}

// ejercicio5("tabla");