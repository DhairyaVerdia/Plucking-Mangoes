class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("sprites/boy.png");
      //image.scale = 2;
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      
      //fill("red");
      image(this.image,pos.x, pos.y, 150, 150);
    }
  };