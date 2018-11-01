import {Tictactoe} from './tictactoe.js';

var board = new Tictactoe();
var turn = true;

function play(){
    var celdas = [...document.getElementsByTagName("td")]
    celdas.map( (td) => td.onclick=evento);
}

function evento(event){
    if(board.getBoard()[event.target.id[0]][event.target.id[1]] == "Empty"){
        if(turn == true){
            board.setBlackToken(event.target.id[0],event.target.id[1]);
            turn = false;
        }else if(turn == false){
            board.setWhiteToken(event.target.id[0],event.target.id[1]);
            turn = true;
        }
    }else{
        alert("Field not empty");
    }
    
}

play();