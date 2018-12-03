function loadDoc() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var mails = [...xhttp.responseXML.documentElement.getElementsByTagName("mail")];
            var mailBox = document.getElementById("mail-box");
            
            for(let i = 0; i < mails.length; i++){
                // TO 
                var to = document.createElement("p"); 
                var toValue = document.createTextNode("To: "+mails[i].children[0].innerHTML);
                document.getElementById("mail-box").appendChild(to);
                to.appendChild(toValue);

                // FROM 
                var from = document.createElement("p"); 
                var fromValue = document.createTextNode("From: "+mails[i].children[1].innerHTML);
                document.getElementById("mail-box").appendChild(from);
                from.appendChild(fromValue);

                // HEADING 
                var heading = document.createElement("h3"); 
                var headingValue = document.createTextNode("Heading: "+mails[i].children[2].innerHTML);
                document.getElementById("mail-box").appendChild(heading);
                heading.appendChild(headingValue);

                // MESSAGE 
                var message = document.createElement("p"); 
                var messageValue = document.createTextNode("Message: "+mails[i].children[3].innerHTML);
                document.getElementById("mail-box").appendChild(message);
                message.appendChild(messageValue);
            }
        }
    };

    xhttp.open("GET", "./mail.xml", true);
    xhttp.send();
}

// setInterval(() =>{
// },10);
