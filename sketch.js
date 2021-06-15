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
var obstacle;
var obstacleimage;
var obstaclegroup;
var crash_sound;
var obs_x,obs_y;
var finishedPlayers=0;
var passedFinish;
var gold;
var silver;
var bronze;

function preload(){
    carImg1=loadImage('IMAGES/car1.png');
    carImg2=loadImage('IMAGES/car2.png');
    carImg3=loadImage('IMAGES/car3.png');
    carImg4=loadImage('IMAGES/car4.png');
    track=loadImage('IMAGES/track.jpg');
     obstacleimage=loadImage('../IMAGES/obs.png');
     crash_sound=loadSound('../SOUNDS/sound_sliding.mp3');
     gold = loadImage('IMAGES/gold.png');
     silver = loadImage('IMAGES/silver.png');
     bronze = loadImage('IMAGES/bronze.png');
}



function setup(){
    database = firebase.database();
    createCanvas(displayWidth-100,displayHeight-30);
    // Creating connection with database.
    xVel =0;
    yVel =0;

    game=new Game()
    game.getState();
    game.start();

    obstaclegroup = createGroup();  // new Group();

    // random value for obs_x adn obs_y


    for(var i=0;i<5;i++){
        obs_x = random(200,950);
        obs_y = random(-height*4,height-300);
        

        obstacle = createSprite(obs_x,obs_y); // createSprite(100,200)
        obstacle.addImage(obstacleimage);
        obstaclegroup.add(obstacle);

    }

    
    
    
}

function draw(){
   background("white");
    if(playerCount === 4 && finishedPlayers===0){
      game.updateState(1)  
    }
    if(gameState === 1){
        game.play();

    }
    if(finishedPlayers ===4 ){
        game.updateState(2);  
    }
    if(gameState ===2 && finishedPlayers===4){
        game.displayRanks();
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
