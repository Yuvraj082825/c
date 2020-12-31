class Stone{
    constructor(x,y,radius,angle){
        var options = {
            isStatic:true,
            'density':1.2
        }
        this.body = Bodies.circle(98, 540, 20, options);
        World.add(world, this.body);
        this.image = loadImage("stone.png");
    }
    display(){
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 40, 40);
        pop();
    }
}