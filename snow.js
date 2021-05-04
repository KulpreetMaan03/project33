class Snow {
  constructor(x, y,width,height){
    var options={
      friction:1,
      density:0.2
    }
  
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.image = loadImage("snow4.webp");
    this.width=width;
    this.height=height;

    World.add(world,this.body);

  }
display(){
image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
}
}