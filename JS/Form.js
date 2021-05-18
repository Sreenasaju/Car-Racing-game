class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(500,150);

        var input=createInput("");
        input.position(510,220)
        var button =createButton("play");
        button.position(530,260);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            var greeting = createElement('h3');
            greeting.html("Welcome "+ name);
            greeting.position(500,260);
        });
    }
}