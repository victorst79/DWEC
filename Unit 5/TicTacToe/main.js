import {Tictactoe} from './tictactoe.js';

var board = new Tictactoe();
var turn = true;

function play(){
    var celdas = [...document.getElementsByTagName("td")]
    celdas.map( (td) => td.onclick=event);
}

function event(event){
    if(board.getBoard()[event.target.id[0]][event.target.id[1]] == "Empty"){
        if(turn == true){
            board.setCrossToken(event.target.id[0],event.target.id[1]);
            document.getElementById(event.target.id[0]+event.target.id[1]).classList.add("cross");
            turn = false;
            if(board.check() == true){
                document.getElementById("result").innerHTML = "Cross Win!";
                document.getElementById("button").innerHTML = "<a href='index.html'>Reset Game</a>";
            }
        }else if(turn == false){
            board.setCircleToken(event.target.id[0],event.target.id[1]);
            document.getElementById(event.target.id[0]+event.target.id[1]).classList.add("circle");
            turn = true;
            if(board.check() == false){
                document.getElementById("result").innerHTML = "Circle Win!";
                document.getElementById("button").innerHTML = "<a href='index.html'>Reset Game</a>";
            }
        }
    }else{
        alert("Field not empty");
    }
    
}

play();