class Form{
    constructor(){
        this.title = createElement('h2');
        this.input=createInput("");
        this.button =createButton("play");
        this.greeting = createElement('h3');
    }

    hide(){
        this.input.hide();
        this.greeting.hide();
        this.button.hide();
    }

    display(){
        
        this.title.html("Car Racing Game");
       this.title.position(displayWidth/2+260,0);

       
        this.input.position(displayWidth/2+250,displayHeight/2-200)
        
        this.button.position(displayWidth/2+415,displayHeight/2-200);

        this.button.mousePressed((data)=>{
        this.input.hide();
        this.button.hide();

            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
           
            this.greeting.html("Welcome "+ player.name);
            this.greeting.position(displayWidth/2+415,displayHeight/2-200);
        });
    }
}

/*
    player --> name,rank,distance - database saved.  player - index

    // gameState =0
    // playerCount = 1

    // player.index = 1
    // player1
    // ---- name : Raghuram
    // ---- distance : 0

    // player2
    // ----name : ABCs
    // =--- distance : 0

*/