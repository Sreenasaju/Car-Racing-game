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
    }
      play(){
          form.hide();
          textSize(50);
          text("Game Start",100,250);
          Player.getPlayerInfo();

          if(allPlayers !== undefined){
            var display_position =120;
            for( var plr in allPlayers){
                if(plr === "player"+player.index){
                   fill("red");     
                }
                else {
                    fill("black")
                }
                display_position +=20
                textSize(17);
                text(allPlayers[plr].name + " : " + allPlayers[plr].distance,120,display_position);
            }
          }
          if(keyIsDown(UP_ARROW) && player.index!=null){
            player.distance +=50;
            player.update();
          }
      }  


      // Game Start
      // A : 0
      // B : 0
      // C : 500
      // D : 0

}

