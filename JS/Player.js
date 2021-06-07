class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.xPos = 0;
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

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance,
            xPos : this.xPos,
        });
    }

    static getPlayerInfo(){
        var playerInfoRef= database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }

}
