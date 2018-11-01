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
            document.getElementById(event.target.id[0]+event.target.id[1]).style.backgroundColor = "red";
            turn = false;
            if(board.check() == true){
                alert("Cross Win!");
            }
        }else if(turn == false){
            board.setCircleToken(event.target.id[0],event.target.id[1]);
            document.getElementById(event.target.id[0]+event.target.id[1]).style.backgroundColor = "green";
            turn = true;
            if(board.check() == false){
                alert("Circle Win!");
            }
        }
    }else{
        alert("Field not empty");
    }
    
}

play();