class Paper
{
	constructor(x,y,r){
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=23;
		this.body=Bodies.circle(this.x, this.y, 23, options)
		this.image=loadImage("sprites/paper.png");
		World.add(world, this.body);

	}
	display(){
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			strokeWeight(3);
			fill(255);
			image(this.image, 0,0,70,70);
			pop()
			
	}

}