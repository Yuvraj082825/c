class Ground{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(400,668,800,10,options);
        /*this.width=width;
        this.height=height;*/
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        rectMode(CENTER);
        fill(51);
        rect(pos.x,pos.y,800,40);
    }
}