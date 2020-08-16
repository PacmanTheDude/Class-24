const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var bird1, pig1, log1;
var pig2, log2, log3, log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1005,327,70,70);
    box2 = new Box(765,327,70,70);
    bird1 = new Bird(100,200);
    pig1 = new Pig(885,327);
    log1 = new Log(885,227,300,PI/2);
    box3 = new Box(1005,200,70,70);
    box4 = new Box(765,200,70,70);
    pig2 = new Pig(885,200);
    log2 = new Log(885,185,300,PI/2);
    box5 = new Box(885,100,70,70);
    log3 = new Log(810,167,150,PI/7);
    log4 = new Log(925,167,150,-PI/7);

    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
   // console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    text(mouseX + "," + mouseY, 200,20);
    box1.display();
    box2.display();
    box3.display();
    log2.display();
    box4.display();
    bird1.display();
    pig1.display();
    pig2.display();
    log1.display();
    box5.display();
    log3.display();
    log4.display();
    ground.display();
}