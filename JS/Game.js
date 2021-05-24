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
      }  
}

