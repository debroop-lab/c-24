class Ground {
    constructor(x,y,width,height){
        var OP={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,OP)
        this.width = width;
        this.height = height;
        
    World .add(myWorld,this.body)
    }
    display(){
        var pos =this.body.position;
     
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
    }
}