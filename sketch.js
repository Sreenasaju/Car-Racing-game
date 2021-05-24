var gameState= 0;
var playerCount=0;
var form,player,game;
var database ,position;




function setup(){
    createCanvas(400,400);
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
