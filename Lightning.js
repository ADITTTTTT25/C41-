class Lightning {
    constructor(x,y,width,height){
        this.w =width;
        this.h = height;

        var options={
            isStatic:true
        }

                this.body = Bodies.circle(x,y,10,options);
        
            this.image = loadAnimation("images/1.png","images/3.png","images/2.png","images/4.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        animation(this.image,pos.x,pos.y,5);
    }
}