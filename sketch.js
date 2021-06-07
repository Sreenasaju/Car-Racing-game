var gameState= 0;
var playerCount=0;
var form,player,game;
var database ,position;
var allPlayers;
var cars,car1,car2,car3,car4;
var carImg1,carImg2,carImg3,carImg4;
var track;
var xVel;
var yVel;
function preload(){
    carImg1=loadImage('IMAGES/car1.png');
    carImg2=loadImage('IMAGES/car2.png');
    carImg3=loadImage('IMAGES/car3.png');
    carImg4=loadImage('IMAGES/car4.png');
    track=loadImage('IMAGES/track.jpg');
}



function setup(){
    createCanvas(displayWidth-100,displayHeight-30);
    // Creating connection with database.
    xVel =0;
    yVel =0;
    database = firebase.database();
    game=new Game()
    game.getState();
    game.start();
}

function draw(){
   background("white");
    if(playerCount === 4){
      game.updateState(1)  
    }
    if(gameState === 1){
        game.play();

    }
    if(gameState ===2){
        game.end();
    }
}
/*function readPosition(data){
    position = data.val();
    
    console.log (position);         // ball/position---x and y

    ball.x = position.x;
    ball.y = position.y;

}

function writePosition(x,y){

    database.ref('ball/position').set({
        'x' : ball.x + x,
        'y' : ball.y + y,
    })
    
} */
