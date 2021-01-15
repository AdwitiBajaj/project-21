var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1 = createSprite(500,500,250,100);
surface1.shapeColor = "blue";
surface2 = createSprite(400,500,150,100);
surface2.shapeColor = "pink";
surface3 = createSprite(200,500,250,100);
surface3.shapeColor = "green";
surface4 = createSprite(300,500,150,100);
surface4.shapeColor = "yellow";


    //create box sprite and give velocity
box = createSprite(400,300,50,50);
box.shapeColor = "pink";
box.velocityX = 4;
box.velocityY = 4;


box.x = random(20,750);
}

function draw() {
    background("black");
    //create edgeSprite
   var edges = createEdgeSprites();
   box.bounceOff(edges)


  //add condition to check if box touching surface and make it box
  if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor = "blue";
    music.play();
   
}

if(surface2.isTouching(box)){
    box.shapeColor = "pink";
box.velocityX = 0;
box.velocityY = 0;
music.stop();

}
    if(surface3.isTouching(box)&& box.bounceOff(surface3)){
    box.shapeColor = "green";
   
    }

    if(box.isTouching(surface4)&& box.bounceOff(surface4)){
    box.shapeColor = "yellow";
    }
  
    
    drawSprites();
}
