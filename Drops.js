class Drop {
    constructor(x, y) {
        var options = {
            friction: 0.001,
            restitution: 1.2
        }

        this.drop = Bodies.circle(x, y, 50, options);
        this.radius = 3.5;
        this.x = x;
        this.y = y
        World.add(world, this.drop)
        //load Image for BestMan

    }
update(){
    if(this.drop.position.y>height){
        Matter.body.setPosition(this.rain,{x:random(0,400), y:random(0,400)})
    }    
}
    display() {
        fill("blue");
        var pos = this.drop.position;
        ellipseMode(RADIUS)
        ellipse(pos.x, pos.y, this.radius, this.radius)
      
    }
}