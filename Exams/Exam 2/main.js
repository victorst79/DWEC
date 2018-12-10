function ejercicio1() {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var restaurantes = JSON.parse(this.responseText);

            for(var i = 0; i < restaurantes.restaurante.length; i++){
                // CREACION COLUMNA
                var fila = document.createElement("tr");
                fila.setAttribute("class","fila");
                document.getElementById("tabla-restaurante").appendChild(fila);
                
                // CREACION ELEMENTOS FILA
                var nombre = document.createElement("td");
                var direccion = document.createElement("td");
                var web = document.createElement("td");
                var imagen = document.createElement("td");

                var enlace = document.createElement("a");
                enlace.setAttribute("href",restaurantes.restaurante[i].url);
                enlace.setAttribute("target","_blank");

                var imagenes = document.createElement("a");
                imagenes.setAttribute("onclick","galeria()");

                // CREACION CONTENIDO
                var nombreValue = document.createTextNode(restaurantes.restaurante[i].nombre);
                var direccionValue = document.createTextNode(restaurantes.restaurante[i].direccion);
                var webValue = document.createTextNode("Web");
                var imagenValue = document.createTextNode("Imagen");

                // INSERCCION
                fila.appendChild(nombre);
                nombre.appendChild(nombreValue);

                fila.appendChild(direccion);
                direccion.appendChild(direccionValue);

                fila.appendChild(web);
                web.appendChild(enlace);
                enlace.appendChild(webValue);
                
                fila.appendChild(imagen);
                imagen.appendChild(imagenes);
                imagenes.appendChild(imagenValue);
            }
        }
    };
    request.open("GET", "./resources/restaurantes.json", true);
    request.send();
}

function ejercicio2(nombre,direccion,web,idTabla){
    var tabla = document.getElementById(idTabla);

    var fila = document.createElement("tr");
    fila.setAttribute("class","fila");
    tabla.append(fila);

    var nombreElement = document.createElement("td");
    var direccionElement = document.createElement("td");
    var webElement = document.createElement("td");
    var imagenElement = document.createElement("td");

    var enlace = document.createElement("a");
    enlace.setAttribute("href",web);
    enlace.setAttribute("target","_blank");

    var nombreValue = document.createTextNode(nombre);
    var direccionValue = document.createTextNode(direccion);
    var webValue = document.createTextNode("Web");
    var imagenValue = document.createTextNode("Imagen");

    fila.appendChild(nombreElement);
    nombreElement.appendChild(nombreValue);
    
    fila.appendChild(direccionElement);
    direccionElement.appendChild(direccionValue);

    fila.appendChild(webElement);
    webElement.appendChild(webValue);

    fila.appendChild(imagenElement);
    imagenElement.appendChild(imagenValue);
    
    if (typeof(Storage) !== "undefined") {
        var myStorage = window.localStorage;
        myStorage.setItem(nombre,direccion,web,idTabla);
    } else {
        return myStorage;
    }
}

function ejercicio3(posicion,idTabla){
    var tabla = [...document.getElementsByClassName("fila")];
    console.log(tabla);
    if(posicion > document.getElementsByClassName("fila").length){
        console.log("NO EXISTE ESA FILA");
    }else{
        document.getElementById(idTabla).removeChild(document.getElementById(idTabla).children[posicion]);
        var myStorage = window.localStorage;
        myStorage.setItem();
    }
}

function ejercicio4(){
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var libros = [...request.responseXML.documentElement.getElementsByTagName("Book")];
            console.log(libros);

            for(let i = 0; i < libros.length; i++){
                var libro = document.createElement("div");
                document.body.appendChild(libro);
                libro.setAttribute("id","libro");

                var to = document.createElement("p"); 
                var toValue = document.createTextNode(libros[i].children[0].innerHTML);
                libro.appendChild(to);
                to.appendChild(toValue);

                var to = document.createElement("p"); 
                var toValue = document.createTextNode(libros[i].children[1].innerHTML);
                libro.appendChild(to);
                to.appendChild(toValue);
                
                var to = document.createElement("p"); 
                var toValue = document.createTextNode(libros[i].children[2].innerHTML);
                libro.appendChild(to);
                to.appendChild(toValue);

                var to = document.createElement("p"); 
                var toValue = document.createTextNode(libros[i].children[3].innerHTML);
                libro.appendChild(to);
                to.appendChild(toValue);

                var to = document.createElement("p"); 
                var toValue = document.createTextNode(libros[i].children[5].innerHTML);
                libro.appendChild(to);
                to.appendChild(toValue);
            }
        }
    };
    request.open("GET", "./resources/examenDiciembre.xml", true);
    request.send();
}

ejercicio1();
ejercicio2("Meson Prueba","Calle de Pruebas 22","https://www.mesonpruebas.com","tabla-restaurante");
// ejercicio3(2,"tabla-restaurante");
ejercicio4();