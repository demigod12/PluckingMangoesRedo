class Boy{

    constructor(x, y, w, height){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 0,
            density: 0
        }
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = height;
        //Creating a sprite 
        this.image = loadImage("images/boy.png")
        this.body = Bodies.rectangle(x, y, w, height, options);
        World.add(world, this.body);

    }

    display(){
        var bPos = this.body.position;
        push();
        translate(bPos.x, bPos.y);
        rectMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        
        pop();
        
    }





}