const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var umbrella;
var maxDrops = 100;
var drops = [];
var lightning;




function preload(){

}

function setup(){
    createCanvas(800,950)
    engine = Engine.create();
    world = engine.world;


    umbrella = new Umbrella(400,600,10,10);

    for(var i = 0;i < maxDrops; i++){
        
        drops.push(new Drop(random(0,800),random(0,950),20));
    }


    lightning = new Lightning(400,100,5);
 

}

function draw(){
    background(0);
    Engine.update(engine);

    umbrella.display();
    if(frameCount % 60 === 0){
    lightning.display();
    }



    for(var i =0 ; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateY();
    }
    
    


}   

