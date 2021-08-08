class Flake{
    constructor(y,r){
  var  options={
    'restitution':0.8,
    'friction':1.0,
    'density':1
  }
 // x = this.x
 y = this.y
 r = this.r
 this.body =Bodies.circle(random(10,790),0,r,options);
 this.image = loadImage("snow4.webp")
 var particles=[]
    }
    display(){
      //var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
     // rotate(angle);
      ellipse(0,0,this.r*2)
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);

      
      if(frameCount % 70 == 0){
      var position =[this.body.position.x, this.body.position.y]
      particles.push(this.position)
      }
      pop();
      }
    }
    
