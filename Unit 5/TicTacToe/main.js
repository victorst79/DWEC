import {Tictactoe} from './tictactoe.js';

var board = new Tictactoe();
// console.log(board.getBoard()[0][0]);

// function play(line,column){
//     if(board.getBoard()[line][column] == "Empty"){
//         console.log("CHANGE");
//     }else{
//         console.log("NOT EMPTY");
//     }
// }

// document.getElementById("01").onclick = play(0,1);

function play(){
    var celdas = [...document.getElementsByTagName("td")]
    celdas.map( (td) => td.onclick=evento);
}

function evento(event){
    board.setBlackToken(event.target.id[0],event.target.id[1]);
}

play();