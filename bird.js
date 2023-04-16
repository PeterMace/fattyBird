export default class Bird{
    constructor(){
        this.frame = 1;
        this.y = 250;
        this.x = 1;
        this.deltaY = 0;
    }

    nextFrame(){
        //Animation
        ++this.frame
        if(this.frame > 7){
            this.frame = 1
        }
        //Movement and Gravity every other frame
        if (this.frame % 7 == 0){
            this.deltaY += (this.deltaY < -20) ? 1 : 2
            this.y += this.deltaY
            console.log(this.y, this.deltaY)
        }
    }

    getFrame(){
        return this.frame;
    }
    
    flyAction(){
        this.deltaY -= 20
    }

    getY(){
        return this.y;
    }

}