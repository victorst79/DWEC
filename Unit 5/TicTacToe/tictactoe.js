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
    setCrossToken(line,column){
        console.log(this.getBoard());
        return this.board[line][column] = "Cross";
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
    setCircleToken(line,column){
        console.log(this.getBoard());
        return this.board[line][column] = "Circle";
    }

    /**
    * This method checks the possible solutions in the game to check
    * who wins and returns a boolean value following this pattern:
    * 
    * Cross: `true`
    * Circle: `false`
    * 
    * @return {Boolean} Boolean
    */
    check(){
        // CHECK CROSS
        if(this.board[0][0] == "Cross" && this.board[0][1] == "Cross" && this.board[0][2] == "Cross"){
            return true;
        }
        if(this.board[1][0] == "Cross" && this.board[1][1] == "Cross" && this.board[1][2] == "Cross"){
            return true;
        }
        if(this.board[2][0] == "Cross" && this.board[2][1] == "Cross" && this.board[2][2] == "Cross"){
            return true;
        }
        if(this.board[0][0] == "Cross" && this.board[1][0] == "Cross" && this.board[2][0] == "Cross"){
            return true;
        }
        if(this.board[0][1] == "Cross" && this.board[1][1] == "Cross" && this.board[2][1] == "Cross"){
            return true;
        }
        if(this.board[0][2] == "Cross" && this.board[1][2] == "Cross" && this.board[2][2] == "Cross"){
            return true;
        }

        // CHECK CIRCLE
        if(this.board[0][0] == "Circle" && this.board[0][1] == "Circle" && this.board[0][2] == "Circle"){
            return false;
        }
        if(this.board[1][0] == "Circle" && this.board[1][1] == "Circle" && this.board[1][2] == "Circle"){
            return false;
        }
        if(this.board[2][0] == "Circle" && this.board[2][1] == "Circle" && this.board[2][2] == "Circle"){
            return false;
        }
        if(this.board[0][0] == "Circle" && this.board[1][0] == "Circle" && this.board[2][0] == "Circle"){
            return false;
        }
        if(this.board[0][1] == "Circle" && this.board[1][1] == "Circle" && this.board[2][1] == "Circle"){
            return false;
        }
        if(this.board[0][2] == "Circle" && this.board[1][2] == "Circle" && this.board[2][2] == "Circle"){
            return false;
        }
    }
}