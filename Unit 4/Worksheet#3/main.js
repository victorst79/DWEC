function validateName(){
    var name = document.getElementById("name").value;
    var regName = new RegExp("\w{8,}");

    if(regName.test(name)){
        alert("Entra");
    }else{
        alert("No entra");
    }
}

function validateForm(){
    var name = document.getElementById("name").value;
    var subname = document.getElementById("subname").value;
    var dni = document.getElementById("dni").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    

    if(name.length > 0 && subname.length > 0 && dni.length > 0 && email.length > 0 && username.length > 0){
        if(name ){
            validateName();
        }
    }else{
        alert("Empty Fields");
    }
}