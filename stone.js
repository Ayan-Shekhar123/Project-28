class stone{
    constructor(){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(x,y,diameter,options);
        this.diameter=diameter;
        this.image=loadImage("stone.png");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        this.image = loadImage("stone.png");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.bosy.position.y);
        imageMode(Center);
        image(this.image,0,0,this.diameter);
        pop();
        }
    }