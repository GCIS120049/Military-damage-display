var bullet;
var thickness;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,20,10);
  
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  thickness=Math.round(random(22,83));

}

function draw() {
  background("black"); 
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  

  bullet.velocityX=speed;

  if(wall.x-bullet.x<=(wall.width+bullet.width)/2){

      bullet.velocityX=0;
      var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

      fill("white");
      textSize(25);
      text("Weight="+weight,width/2-20,50);
      text("Speed="+speed,width/2+125,50);
      text("Thickness="+thickness,width/2+280,50);
      text("Damage="+damage,width/2+450,50);


       if(damage<10){
         wall.shapeColor=rgb(0,255,0);
       }
       if(damage>10){
         wall.shapeColor=rgb(255,0,0);
       }

  }

  drawSprites();
}