class  BOB {

    constructor(x,y,radius){
    
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
        
    this.radius=radius;
    this.body =Bodies.circle(x,y,17,options);
    World.add(world,this.body);
    
    }
    
    
    display()  {
    push()
    fill("white")
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,this.radius)
    pop();
    }
    
    }