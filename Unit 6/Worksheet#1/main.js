function main(){
    setInterval(loadDoc, 2000);
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var mails = [...xhttp.responseXML.documentElement.getElementsByTagName("mail")];
            
            if(document.getElementsByTagName("div").length != mails.length){
                for(let i = document.getElementsByTagName("div").length; i < mails.length; i++){
                    
                    var mail = document.createElement("div");
                    document.getElementById("mail-box").appendChild(mail);
                    mail.setAttribute("id","mail");
    
                    // TO 
                    var to = document.createElement("p"); 
                    var toValue = document.createTextNode("To: "+mails[i].children[0].innerHTML);
                    mail.appendChild(to);
                    to.appendChild(toValue);
    
                    // FROM 
                    var from = document.createElement("p"); 
                    var fromValue = document.createTextNode("From: "+mails[i].children[1].innerHTML);
                    mail.appendChild(from);
                    from.appendChild(fromValue);
    
                    // HEADING 
                    var heading = document.createElement("h3"); 
                    var headingValue = document.createTextNode("Heading: "+mails[i].children[2].innerHTML);
                    mail.appendChild(heading);
                    heading.appendChild(headingValue);
    
                    // MESSAGE 
                    var message = document.createElement("p"); 
                    var messageValue = document.createTextNode("Message: "+mails[i].children[3].innerHTML);
                    mail.appendChild(message);
                    message.appendChild(messageValue);
                }
            }
            
        }
    };
    xhttp.open("GET", "./mail.xml", true);
    xhttp.send();
}