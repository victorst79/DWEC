function mailBox(){
	if (window.XMLHttpRequest) {
    	var request = new XMLHttpRequest();
 	} else {
    	var request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    request.open("POST", "mail.xml", true);
    request.send();
    
    function newMail(){
        if (request.readyState == 4 && request.status == 200) {
            var xmlResult = request.responseXML;
            var mail = xmlResult.getElementsByTagName("mail");
            console.log(mail);
        }
    }
}

window.onload = function(){
	mailBox();
}