class Umbrella {
    constructor(x,y,width,height){
        var options ={
            isStatic:true,
        }

        this.w = width;
        this.h = height;
        this.body = Bodies.rectangle(x,y,this.w,this.h,options);

this.image = loadAnimation("images/walking_8.png","images/walking_7.png","images/walking_6.png","images/walking_5.png","images/walking_4.png","images/walking_3.png","images/walking_2.png","images/walking_1.png")

        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        animation(this.image,pos.x,pos.y,200,200);
    }
}