function createCookie(){
    if(!document.cookie){
        // USER NAME
        var userName = prompt("User Name");
        // BACKGROUNDCOLOR
        var bgColor = prompt("BackGroundColor");
        // FONT-SIZE
        var fontSize = prompt("FontSize");
        // COOKIES
        setCookie("UserName",userName,5);
        setCookie("BackGroundColor",bgColor,5);
        setCookie("FontSize",fontSize,5);
    }else{
        var name = getCookie("UserName");
        var color = getCookie("BackGroundColor");
        var font = getCookie("FontSize");
        
        console.log(color);
        console.log(font);
        alert("Welcome " + name);
        document.getElementById("body").style.backgroundColor = color;
        document.getElementById("body").style.fontSize = parseInt(font)+"px";
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
    return ca;
}

function deleteCookie(cname){
    document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
}

function deleteAllCookies(){
    deleteCookie("UserName");
    deleteCookie("BackGroundColor");
    deleteCookie("FontSize");
}

document.onload = createCookie();