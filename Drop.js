class Drop{

    constructor(x,y){
        var options ={
            friction:0.1,
            restitution:2
        }

        this.body = Bodies.circle(x,y,10,options);
        this.color =color( 0,0,255);
        
        World.add(world,this.body);

        
    }

    display(){

        var pos = this.body.position;
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,10);
        
    }

    updateY(){
        if(this.body.position.y > 950){
            Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,950)})
    }
    }
}