class AbstractCell{

    constructor(i, j, size){
        this.i = i;
        this.j = j;
        this.x = i * size + gridTranslation.x;
        this.y = j * size + gridTranslation.y;
        this.size = size;
        this.revealed = false;
        this.icon;
        this.isFlagged = false;
    }


    contains(x,y){
        return x < this.x + this.size && x > this.x && y < this.y + this.size && y > this.y;
    }

    flag(){
        this.isFlagged = !this.isFlagged;
    }
    
}





