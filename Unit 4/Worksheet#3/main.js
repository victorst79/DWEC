function validateName(){
    var name = document.getElementById("name").value;
    var regName = new RegExp("^[a-z A-Z]*$");
    
    if(regName.test(name)){
        document.getElementById('name').classList.remove("error");
        document.getElementById('name').classList.add('correct');
    }else{
        document.getElementById('name').classList.remove("correct");
        document.getElementById('name').classList.add('error');
    }
}

function validateSubname(){
    var subname = document.getElementById("subname").value;
    var regName = new RegExp("^[a-z A-Z]*$");
    
    if(regName.test(subname)){
        document.getElementById('subname').classList.remove("error");
        document.getElementById('subname').classList.add('correct');
    }else{
        document.getElementById('subname').classList.remove("correct");
        document.getElementById('subname').classList.add('error');
    }
}

function validateUsername(){
    var username = document.getElementById("username").value;
    var regName = new RegExp("[a-zA-Z0-9./*-]{8,}");

    if(regName.test(username)){
        document.getElementById('username').classList.remove("eror");
        document.getElementById('username').classList.add('correct');
    }else{
        document.getElementById('username').classList.remove("correct");
        document.getElementById('username').classList.add('error');
    }
}

function validatePhone(){
    var phone = document.getElementById("phone").value;
    var regName = new RegExp("^[0-9]{9}$");

    if(regName.test(phone)){
        document.getElementById('phone').classList.remove("error");
        document.getElementById('phone').classList.add('correct');
    }else{
        document.getElementById('phone').classList.remove("correct");
        document.getElementById('phone').classList.add('error');
    }
}

function validateDni(){
    var dni = document.getElementById("dni").value;
    var regName = new RegExp("[0-9]{8}[A-Z]{1}");

    if(regName.test(dni)){
        document.getElementById('dni').classList.remove("error");
        document.getElementById('dni').classList.add('correct');
    }else{
        document.getElementById('dni').classList.remove("correct");
        document.getElementById('dni').classList.add('error');
    }
}

function validatEmail(){
    var email = document.getElementById("email").value;
    var regName = new RegExp("[a-zA-Z/*-_.0-9]{1,}[@][a-z]{1,}.com");

    if(regName.test(email)){
        document.getElementById('email').classList.remove("error");
        document.getElementById('email').classList.add('correct');
    }else{
        document.getElementById('email').classList.remove("correct");
        document.getElementById('email').classList.add('error');
    }
}

function validateForm(){
    var name = document.getElementById("name").value;
    var subname = document.getElementById("subname").value;
    var phone = document.getElementById("phone").value;
    var dni = document.getElementById("dni").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    

    if(name.length > 0 && subname.length > 0 && dni.length > 0 && email.length > 0 && username.length > 0 && phone.length > 0){
        
        if(name){
            validateName();
        }
        if(subname){
            validateSubname();
        }
        if(phone){
            validatePhone();
        }
        if(dni){
            validateDni();
        }
        if(email){
            validatEmail();
        }
        if(username){
            validateUsername();
        }
    }else{
        alert("Empty Fields");
    }
}
