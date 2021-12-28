

class NumberCell extends AbstractCell {
    
    constructor(i, j, size){
        super(i, j, size);
        this.neighbourMines;
    }


    show(){
        strokeWeight(1);
        imageMode(CORNER);
        rectMode(CORNER);

        if(this.revealed){
            fill(185);
            rect(this.x, this.y, this.size, this.size);

            if(this.neighbourMines > 0){
                imageMode(CENTER);
                image(this.icon,  this.x + (this.size/2), this.y + (this.size/2), this.size*0.8, this.size*0.8); 
            }
        }
        else{             
            if(this.isFlagged)
                image(flagCellIcon, this.x, this.y, this.size, this.size);
            else image(closedCellIcon, this.x, this.y, this.size, this.size);
        }        
    }

    countMines(){
        let total = 0;
        let i, j;

        for(let xOff = -1; xOff <= 1; xOff++){
            for(let yOff = -1; yOff <= 1; yOff++){
                i = this.i + xOff;
                j = this.j + yOff;
                if(i >= 0 && i < cols && j >= 0 && j < rows)
                    if(grid.grid[i][j] instanceof Mine) total++;
            }
        }
        this.neighbourMines = total;
        this.icon = numberIcon[this.neighbourMines-1];
    }

    numberIcon(){
       
    }

    reveal(){
        let i,j,cell;
        this.revealed = true;
        if(this.neighbourMines == 0){

            for(let xOff = -1; xOff <= 1; xOff++){
                for(let yOff = -1; yOff <= 1; yOff++){
                    
                    i = this.i + xOff;
                    j = this.j + yOff;

                    if(i >= 0 && i < cols && j >= 0 && j < rows){
                        cell = grid.grid[i][j];
                        
                        if(!cell.revealed) 
                            cell.reveal(); 
                    }
                }
            }
        }

    }


}