class Mango{

    constructor(x, y, w, h){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 0, 
            density: 0, 
        }
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;

        this.image = loadImage("images/mango.png");

        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
        
    }
    display(){
        var mangoPos = this.body.position;
        push();
        translate(mangoPos.x, mangoPos.y);
        rectMode(CENTER);        
        image(this.image, 0, 0, this.width, this.height)
        pop();
    }
}