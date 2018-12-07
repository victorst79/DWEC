function checkName() {
    var element = document.getElementById("username");
    if(element.value.length == 0){
        element.style.borderColor = "red";
    }else{        
        var request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if(this.responseText.length != 0){
                    element.style.borderColor = "green";
                    document.getElementById("result").innerHTML = this.responseText;
                    console.log(this.responseText);
                }
            }
        };

        request.open("GET", "main.php?q=" + element.value, true);
        request.send();
        }    
  }