var ball;
var database ,position;
function setup(){

    // Creating connection with database.

    database = firebase.database();

    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballPosition = database.ref('ball/position'); // pointing to ball/position node in DB
    ballPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data){
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
    
}
function showError(){
    console.log ("error");
}
