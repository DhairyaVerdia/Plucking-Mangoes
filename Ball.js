class Bob {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:1,
          density:1.2

      }
      this.body = Bodies.circle(x,y,radius,options);
      this.x = x;
      this.y = y;
      this.radius = radius;
     // this.radius =radius;
      this.image =loadImage("sprites/stone.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
     // fill("pink");
      image(this.image,pos.x, pos.y, this.radius, this.radius);
    }
  };