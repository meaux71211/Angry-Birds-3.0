class Log extends Baseclass{
    constructor(x,y,h,angle) {
    super(x,y,20,height,angle);
    this.image = loadImage("wood2.png");
    Matter.Body.setAngle(this.body,angle);
    }
    
}