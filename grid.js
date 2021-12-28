
class Grid {

    constructor(rows, cols, cellSize){
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;
        this.grid = this.make2DArray();
    }


    make2DArray(){
        let array = new Array(this.cols);
    
        for(let i = 0; i < this.cols; i++){
            array[i] = new Array(this.rows);
        }
    
        return array;
    }


    initializeGrid(){
        let i, j, index;
        let mineOptions = [];

        
        for(i = 0; i < this.cols; i++){
            for(j = 0; j < this.rows; j++)
                mineOptions.push([i, j]);
        }

        //choosing the mine spots
        for(let a = 0; a < NUMBER_OF_MINES ; a++){
            index = floor(random(mineOptions.length));
            i = mineOptions[index][0];
            j = mineOptions[index][1];

            this.grid[i][j] = new Mine(i, j, this.cellSize);
            mineOptions.splice(index, 1);
        }

        //filling the rest of the grid
        for(i = 0; i < this.cols; i++){
            for(j = 0; j < this.rows; j++)
                if(this.grid[i][j] == null)
                    this.grid[i][j] = new NumberCell(i, j, this.cellSize);
        }

        //assigning each cell a number according with the nearby mines
        for(i = 0; i < this.cols; i++){
            for(j = 0; j < this.rows; j++)
                if(this.grid[i][j] instanceof NumberCell)
                    this.grid[i][j].countMines();
        }
    }


    reveal(x,y){
        for(let i = 0; i < cols; i++){
            for(let j = 0; j < rows; j++)
                if(this.grid[i][j].contains(x,y)){
                    this.grid[i][j].reveal();
                    if(this.grid[i][j] instanceof Mine) lost = true;
                    break;
                }
        }
    }

    revealAll(){
        for(let i = 0; i < cols; i++)
            for(let j = 0; j < rows; j++)
                    this.grid[i][j].reveal();
    }


    flag(x,y){
        for(let i = 0; i < cols; i++){
            for(let j = 0; j < rows; j++)
                if(this.grid[i][j].contains(x,y)){
                    if(!this.grid[i][j].revealed){
                        this.grid[i][j].flag();

                        if(this.grid[i][j].isFlagged) 
                            nFlags++
                        else nFlags--;
                    }
                    break;
                }
        }
    }
    

    show(){
        for(let i = 0; i < cols; i++)
            for(let j = 0; j < rows; j++)
                this.grid[i][j].show();
    }

    checkWin(){
        let cell;
        for(let i = 0; i < cols; i++)
            for(let j = 0; j < rows; j++){
                cell = this.grid[i][j]; 
                if(cell instanceof NumberCell && !cell.revealed) 
                    return false;
            }

        return true;
    }

}
