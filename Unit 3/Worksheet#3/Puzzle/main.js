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

        // GENERATE ARRAY WITH ALL NUMBER OF PARTS
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

        // RANDOMIZER PARTS OF PUZZLE      
        var pos = 0;
        for(let i = 0; i <= height-1; i++){
            for(let j = 0; j <= width-1; j++){
                puzz[i][j] = auxPuzz[pos];
                pos++;
            }            
        }
        return puzz;
    }

}

var height = parseInt(prompt("Height of the puzzle"));
var width = parseInt(prompt("Width of the puzzle"));

var puzz = new Puzzle(height,width);
console.log(puzz);