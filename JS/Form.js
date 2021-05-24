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
       this.title.position(500,150);

       
        this.input.position(510,220)
        
        this.button.position(530,260);

        this.button.mousePressed((data)=>{
        this.input.hide();
        this.button.hide();

            player.name = this.input.value();
            playerCount += 1;
            player.updateCount(playerCount);
           
            this.greeting.html("Welcome "+ player.name);
            this.greeting.position(500,260);
        });
    }
}

/*
    player --> name,rank,distance - database saved.  player - index

*/