var cat,dog

function setup() {
  createCanvas(1200,800);
  cat = createSprite(500, 500, 50, 80);
  cat.shapeColor = "red";
  dog = createSprite(100,100,100,150);
  dog.shapeColor = "green";
}

function draw() {
  background(0);
  dog.x = World.mouseX;
  dog.y = World.mouseY; 
  if(cat.x - dog.x < cat.width/2 + dog.width/2
     && dog.x - cat.x < cat.width/2 + dog.width/2
     && cat.y - dog.y < cat.height/2 + dog.height/2
     && dog.y - cat.y < cat.height/2 + dog.height/2
    ){
    dog.shapeColor = "blue";
    cat.shapeColor = "blue";
  } 
  else{
    cat.shapeColor = "red"
  dog.shapeColor = "green";
}
  drawSprites();
}