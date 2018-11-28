function loadDoc() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var mails = xhttp.responseXML.documentElement.getElementsByTagName("mail");
            var mailBox = document.getElementById("mail-box");
            
            console.log(xhttp.responseXML.documentElement.getElementsByTagName("mail")[0].children[0].innerHTML);
            
            // TO 
            var to = document.createElement("p"); 
            var toValue = document.createTextNode("To: "+mails[0].children[0].innerHTML);
            document.getElementById("mail-box").appendChild(to);
            to.appendChild(toValue);

            // FROM 
            var to = document.createElement("p"); 
            var toValue = document.createTextNode("From: "+mails[0].children[1].innerHTML);
            document.getElementById("mail-box").appendChild(to);
            to.appendChild(toValue);

            // HEADING 
            var to = document.createElement("h3"); 
            var toValue = document.createTextNode("Heading: "+mails[0].children[2].innerHTML);
            document.getElementById("mail-box").appendChild(to);
            to.appendChild(toValue);

            // HEADING 
            var to = document.createElement("p"); 
            var toValue = document.createTextNode("Message: "+mails[0].children[3].innerHTML);
            document.getElementById("mail-box").appendChild(to);
            to.appendChild(toValue);
        }
    };

    xhttp.open("GET", "./mail.xml", true);
    xhttp.send();
}
