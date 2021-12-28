

class Mine extends AbstractCell{
    constructor(i, j, size){
        super(i, j, size);
        this.icon = mineIcon;
    }

    show(){
        strokeWeight(1);
        imageMode(CORNER);
        rectMode(CORNER);

        if(this.revealed){
            fill(185);
            rect(this.x, this.y, this.size, this.size);
            imageMode(CENTER);
            image(this.icon, this.x + (this.size/2), this.y + (this.size/2), this.size*0.8, this.size*0.8);
        }
        else{
            if(this.isFlagged)
                image(flagCellIcon, this.x, this.y, this.size, this.size);
            else image(closedCellIcon, this.x, this.y, this.size, this.size);
        }
    }

    reveal(){
        this.revealed = true;
    }


    
}


