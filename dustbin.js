class Paper{
	constructor(x,y,width,height)
	{
				
        this.body=Bodies.rectangle(this.x, this.y,this.width,this.height) 
        this.width=width
        this.height=height
		this.radius=radius
		World.add(world, this.body);

	}
	display()
	{
			
			var apos=this.body.position;		

			push()
			translate(apos.x, apos.y);
			rectMode(CENTER)
        	fill(255)
			rect(apos.x, apos.y,apos.width, apos.height)
			pop()
			
	}

}