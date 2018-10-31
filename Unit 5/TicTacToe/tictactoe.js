export class Tictactoe{
    /**
    * The constructor generates a bidimensional array with 3x3 positions, which simulates the logic of a game board.
    */
    constructor(){
        var board = [];

        for(let i = 0; i < 3; i++){
            board[i] = [i];
            for(let j = 0; j < 3; j++){
                board[i][j] = "Empty";
            }
        }

        this.board = board;
    }

    // GETS
    
    /**
    * The method return array with all position and data of the TicTacToe board.
    * 
    * @return {Array} board
    */
    getBoard(){
        return this.board;
    }

    // SETS

    /**
    * Receives 2 number, `line` is for a line position in the
    * array, `colum` is for a column position.
    * The method places a black tile in the chosen position.
    * 
    * Ex: setBlackToken(0,1); A black tile is placed in the position [0,1]
    * @param {Number} line
    * @param {Number} column
    */
    setBlackToken(line,column){
        console.log(this.getBoard());
        return this.board[line][column] = "Black";
    }

    /**
    * Receives 2 number, `line` is for a line position in the
    * array, `colum` is for a column position.
    * The method places a white tile in the chosen position.
    * 
    * Ex: setBlackToken(0,1); A black tile is placed in the position [0,1]
    * @param {Number} line
    * @param {Number} column
    */
    setWhiteToken(line,column){
        console.log(this.getBoard());
        return this.board[line][column] = "White";
    }
}