class Player{
    constructor(){

    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{     // anonymous function
            playerCount = data.val(); // gameState variable "="
        })
    }   

    // Write data
    updateCount(count){
        database.ref('/').update({
            playerCount : count // gameState node in database - use ":" 
        })

    }    

// playerCount+=1  playerCount = playerCount + 1;   a=a+1  a+= 1
//player.updateCount(playerCount);



}
