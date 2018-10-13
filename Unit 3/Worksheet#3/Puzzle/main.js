// Measurement of the puzzle (Array)

class Puzzle{
    constructor(height,width){
        this.height = height;
        this.width = width;

        // ARRAY STRUCTURE PUZZLE
        var puzz = [];
        var auxPuzz = [];
        var nam = 0;
        for(let i = 0; i <= height-1; i++){
            puzz[i] = [i];
            for(let j = 0; j <= width-1; j++){
                puzz[i][j] = nam;
                nam++;
            }            
        }

        // GENERATE ARRAY WITH ALL NUMBER OF PIECE
        for(let i = 0; i <= height-1; i++){
            for(let j = 0; j <= width-1; j++){
                auxPuzz.push(puzz[i][j]);
            }            
        }
        
        // SHUFFLE ARRAY        
        for (let i = auxPuzz.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [auxPuzz[i], auxPuzz[j]] = [auxPuzz[j], auxPuzz[i]];
        }        

        // RANDOMIZER PIECE OF PUZZLE      
        var pos = 0;
        for(let i = 0; i <= height-1; i++){
            for(let j = 0; j <= width-1; j++){
                puzz[i][j] = auxPuzz[pos];
                pos++;
            }            
        }
        this.board = puzz;
    }

    // GETS
    getBoard(){
        return this.board;
    }

    getPosition(){
        for(let i = 0; i <= this.height-1; i++){
            for(let j = 0; j <= this.width-1; j++){
                if(this.board[i][j] == 0){
                    return "The empty piece is in line["+i+"] and column["+j+"]";
                }
            }            
        }
    }

    // SETS
    moveTokenUp(){

    }
}

var height = parseInt(prompt("Height of the puzzle"));
var width = parseInt(prompt("Width of the puzzle"));

var puzz = new Puzzle(height,width);
console.log(puzz);