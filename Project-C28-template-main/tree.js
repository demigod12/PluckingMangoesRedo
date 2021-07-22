class Tree{

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
        this.image = loadImage("images/tree.png")
        this.body = Bodies.rectangle(x, y, w, height, options);
        World.add(world, this.body);

    }

    display(){
        var treePos = this.body.position;
        push();
        translate(treePos.x, treePos.y);

        rectMode(CENTER);
        //stroke("green");
        //strokeWeight(7); 
        fill("blue")

        //rect(groundPos.x, groundPos.y, this.height, this.width);
        image(this.image, 0, 0, this.width, this.height);
        
        pop();
        
    }





}