class Stone{

    constructor(x, y, w, h){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 0, 
            density: 0, 
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        //this.image = loadImage("image/stone.png")
        
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    }
    display(){
        var stonePos = this.body.position;

        push();
        translate(stonePos.x, stonePos.y);
        
        rectMode(CENTER);
        fill("red");
        
       rect(0, 0, this.w, this.h)
        //image(this.image, 0, 0, this.w, this.h);

        pop();
    }
}