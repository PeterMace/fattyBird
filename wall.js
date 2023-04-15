export default class Wall{
    constructor(x, y){
        this.x = 800;
        this.y = 600;
        this.size = 1 + Math.floor(Math.random() * 3);
        this.imgSrc = null;
    }

    nextFrame(){
        this.x -= 10;
    }

    getX(){
        return this.x;
    }
    
    getY(){
        return this.y;
    }
    
    getSize(){
        return this.size;
    }

    getImgSrc(){
        if(!this.imgSrc){
            const src = `./img/wall.png`;
            const element = document.createElement("img");
            element.setAttribute('src', src);
            this.imgSrc = element;
        }
        return this.imgSrc;
    }

    checkDestory(){
        if(this.x < -64){ return true};
    }
}