class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
          
      }
      
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image=loadImage("sprites/dustbingreen.png");
      World.add(world, this.body);

    }
    display(){
      push();
      var pos =this.body.position;
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill("red");
      rect(0,0,this.width,this.height);
      pop();
      
      
    }
  }