class Paper {
    constructor(x, y, radius){
     var options = {
         isStatic : false,
         restitution : 0.1,
         friction : 0,
         density  : 1.2
     }
     this.image = loadImage("paper.png");
     this.x = x;
     this.y = y;     
     this.radius = radius;
     this.body = Bodies.circle(x, y, radius, options);
     

     World.add(world, this.body);
    }
   display(){
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, this.radius);
      
   }
}