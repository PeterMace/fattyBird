export default class Bird{
    constructor(){
        this.frame = 1;
    }

    nextFrame(){
        ++this.frame
        if(this.frame > 7){
            this.frame = 1
        }
    }

    getFrame(){
        return this.frame;
    }
}