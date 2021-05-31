var gameState= 0;
var playerCount=0;
var form,player,game;
var database ,position;
var allPlayers;
var cars,car1,car2,car3,car4;


function setup(){
    createCanvas(displayWidth-100,displayHeight-30);
    // Creating connection with database.

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
