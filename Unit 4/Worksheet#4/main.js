function createCookie(){
    if(!document.cookie){
        var userName = prompt("User Name");
        setCookie("UserName",userName,5);
    }else{
        var cookie = getCookie(document.cookie);
        var result = cookie.split("=");
        alert("Welcome "+result[1]);
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    // TIME IN MINUTES
    d.setTime(d.getTime() + (exdays * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return c;
}

document.onload = createCookie();