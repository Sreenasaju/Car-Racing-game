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
    }
      play(){
          form.hide();
          textSize(50);
          text("Game Start",100,250);
          Player.getPlayerInfo();

          if(allPlayers !== undefined){
              image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
              var x =175;
              var y=0;
              var index = 0;

              // cars = [car1,car2,car3,car4]; //cars[0]
            
            for( var plr in allPlayers){
                index = index+1;
                x= x+200;
                y = displayHeight - allPlayers[plr].distance;

                cars[index-1].x = x;
                cars[index-1].y = y;

                if(plr === "player"+player.index){
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
                else {
                    cars[index-1].shapeColor = "black";
                }
                // display_position +=20
                // textSize(17);
                // text(allPlayers[plr].name + " : " + allPlayers[plr].distance,120,display_position);
            }
          }
          if(keyIsDown(UP_ARROW) && player.index!=null){
            player.distance +=50;
            player.update();
          }
          if(player.distance>4500){
              gameState=2
          }
          drawSprites();
      }  
        end(){
            console.log('GAME END')
        }

      // Game Start
      // A : 0
      // B : 0
      // C : 500
      // D : 0

}

