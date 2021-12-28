
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
const CELL_SIZE = 50;
const NUMBER_OF_MINES = 15;


let cols;
let rows;
let grid;

let flagIcon;
let mineIcon;
let numberIcon = [];
let flagCellIcon;
let closedCellIcon;

let gridTranslation;
let menuStatus;
let restartButton;
let clock;
let time;
let canvas;
let nFlags = 0;
let lost = false;




function preload(){
    mineIcon = loadImage('img/mineIcon1.png');
    flagCellIcon = loadImage('img/flag.png');
    closedCellIcon = loadImage('img/cell.png');
    mineSweeperLogo = loadImage('img/minesweeperLogo.png');
    flagIcon = loadImage('img/flag_icon.png');

    for(let i = 0; i < 8; i++)
        numberIcon[i] = loadImage('img/' + (i + 1) + '.png');

}



function setup() {
    canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.attribute("oncontextmenu", "return false");  
    setInterval(updateTime, 1000);
    initialize();

}

function initialize(){
    gridTranslation =  createVector(0, height * 0.1);
    cols = floor( width / CELL_SIZE );
    rows = floor( (height * 0.9) / CELL_SIZE );   
    grid = new Grid(rows, cols, CELL_SIZE);
    grid.initializeGrid();
    clock = 0;
    updateTime(); 
    
}


function draw() {
    
    background(200);
    grid.show();
    drawInfo(); 
}


function mousePressed(){
    if(mouseButton === LEFT){
        grid.reveal(mouseX, mouseY);
        if( (mouseX >= 0 && mouseX <= 3 * CELL_SIZE) && (mouseY >= 0 && mouseY <= CELL_SIZE) ){
            initialize();
        }
    }
    else if(mouseButton === RIGHT){
        grid.flag(mouseX, mouseY);
    }
}

function updateTime(){
    let seconds = nf( floor(clock % 60), 2, 0);
    let minutes = nf( floor((clock / 60)), 2, 0);  
    clock++;
    time =  minutes + ":" + seconds;
}


function drawInfo(){
    imageMode(CENTER);
    rectMode(CENTER);
    textAlign(CENTER);
    fill(0);    
    textSize(20);

    image(mineSweeperLogo, 1.5*CELL_SIZE, 0.5*CELL_SIZE, CELL_SIZE*3, CELL_SIZE);

    text(time, 4.5*CELL_SIZE, CELL_SIZE*0.8, CELL_SIZE, CELL_SIZE);
    
    image(mineIcon, 6.5*CELL_SIZE, CELL_SIZE*0.5, CELL_SIZE* 0.8, CELL_SIZE*0.8);
    text(NUMBER_OF_MINES, 7.5*CELL_SIZE, CELL_SIZE*0.8, CELL_SIZE, CELL_SIZE);
    
    image(flagIcon, 8.5*CELL_SIZE, CELL_SIZE*0.5, CELL_SIZE* 0.8, CELL_SIZE*0.8);
    text(NUMBER_OF_MINES - nFlags, 9.5*CELL_SIZE, CELL_SIZE*0.8, CELL_SIZE, CELL_SIZE);

}



