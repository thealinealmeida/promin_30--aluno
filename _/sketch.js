var ball,lowerWall,upperWall,leftWall;
function setup(){
  createCanvas(950, 470);
  ball = createSprite(40,40,30,30);
  
  lowerWall = createSprite(550,450,1200,40);
  upperWall = createSprite(550,20,1200,40);
  leftwall = createSprite(15,235,40,390);
    
  
  
}


function draw(){
  background(220);
    
    if (keyDown("right")){
        ball.x +=5
    }
    
    if (keyDown("left")){
        ball.x -=5
    }
    
    if (keyDown("up")){
        ball.y -=5
    }
    
    if (keyDown("down")){
        ball.y +=5
    }
    
    drawSprites();
}

 




  


