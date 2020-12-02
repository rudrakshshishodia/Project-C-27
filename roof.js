class Roof{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,w,h,options);
        
    }

    display(){
        var roofpos=this.body.position;
        push();
        translate(roofpos.x,roofpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        stroke("orange");
        fill("yellow");
        rect(0,0,this.w,this.h)
        pop();
    }
}