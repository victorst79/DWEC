$("document").ready( () => {

    for(let i = 0; i <= $("tr").children("td").length;i++){
        
        if(i <= 2){
            $("tr:nth-child("+ i +")").css("background-color","cyan");
        }else if(i > 2){
            $("tr:nth-child("+ i +")").css("background-color","red");
        }
    }

    
});