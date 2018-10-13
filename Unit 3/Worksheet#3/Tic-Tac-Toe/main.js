class Tictactoe{
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
    getBoard(){
        return this.board;
    }

    // SETS
    setBlackToken(line,column){
        console.log(this.getBoard());
        return this.board[line][column] = "Black";
    }

    setWhiteToken(line,column){
        console.log(this.getBoard());
        return this.board[line][column] = "White";
    }    
}



var game = new Tictactoe();
console.log(game);