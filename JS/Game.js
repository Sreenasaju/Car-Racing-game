class Game{
    constructor(){
        
    }

    //Read data

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",(data)=>{     // anonymous function
            gameState = data.val(); // gameState variable "="
        })
    }   

    // Write data
    updateState(state){
        database.ref('/').update({
            gameState : state // gameState node in database - use ":"
        })

    }    
    start(){
     if(gameState===0) {
         form=new Form();
         form.display();
         player=new Player();
         player.getCount();
        }   
        car1=createSprite(100,200);
        car1.addImage(carImg1);
        car2=createSprite(300,200);
        car2.addImage(carImg2);
        car3=createSprite(500,200);
        car3.addImage(carImg3);
        car4=createSprite(700,200);
        car4.addImage(carImg4);
        cars=[car1,car2,car3,car4];
        passedFinish=false;
    }
      play(){
          form.hide();
          textSize(50);
          text("Game Start",100,250);
          Player.getPlayerInfo();
          player.getFinishedPlayers();

          if(allPlayers !== undefined){
              image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
              var x =175;
              var y=0;
              var index = 0;

              // cars = [car1,car2,car3,car4]; //cars[0]
            
            for( var plr in allPlayers){
                index = index+1;x
                x= 200+(index*200)+allPlayers[plr].xPos;
                y = displayHeight - allPlayers[plr].distance;

                cars[index-1].x = x;
                cars[index-1].y = y;

                if(plr === "player"+player.index){
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                    if(cars[index-1].isTouching(obstaclegroup)){
                        crash_sound.play();
                        yVel -=0.9;
                    }
                }
                else {
                    cars[index-1].shapeColor = "black";
                }
                // display_position +=20
                // textSize(17);
                // text(allPlayers[plr].name + " : " + allPlayers[plr].distance,120,display_position);
            }
          }

          if(player.distance < 2400){
            if(keyIsDown(38) && player.index !== null){
                yVel += 0.9;
                if(keyIsDown(37)){
                    xVel -= 0.2;
                }
                if(keyIsDown(39)){
                    xVel += 0.2;
                }
            }else if(keyIsDown(38) && yVel > 0 && player.index !== null){
                yVel -= 0.1;
                xVel *= 0.9;
            }else{
                yVel *= 0.985;
                xVel *= 0.985;
            }
          }else if(passedFinish === false){
                yVel *= 0.7;
                xVel *= 0.7;
                Player.updateFinishedPlayers();
                player.place=finishedPlayers;
                player.update();
                passedFinish = true
          }else{
            yVel *= 0.7;
            xVel *= 0.7;
          }
          
           //move the car
           player.distance += yVel;
           yVel *= 0.98;
           player.xPos += xVel;
           xVel *= 0.985;
           player.update();
           //display sprites
          drawSprites();
      }  

      // Displat player Ranks

        displayRanks(){
            console.log('GAME END');
         
            camera.position.y=0;
            camera.position.x=0;

            Player.getPlayerInfo();

            imageMode(CENTER);

            // display all three badges

             image(bronze,displayWidth/-4,-100+displayHeight/9,200,240);
             image(silver,displayWidth/4,-100+displayHeight/9,225,270);
             image(gold,0,-100,250,300);

             textAlign(CENTER);
             textSize(50);

             for(var plr in allPlayers){
                if(allPlayers[plr].place === 1){
                    text("1st: " + allPlayers[plr].name, 0, 85);
                }else if(allPlayers[plr].place === 2){
                    text("2nd: " + allPlayers[plr].name, displayWidth/4, displayHeight/9 + 73);
                }else if(allPlayers[plr].place === 3){ 
                    text("3rd: " + allPlayers[plr].name, displayWidth/-4, displayHeight/10 + 76);
                }else{
                    textSize(30);
                    text("Honorable Mention: " + allPlayers[plr].name, 0, 225);
                }
            }

        }

      // Game Start
      // A : 0
      // B : 0
      // C : 500
      // D : 0

}

