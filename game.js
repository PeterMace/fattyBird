export default class Game{
    constructor(){
        this.wallSpawnRate = 60;
        this.frameTicker = 0;
        this.score = 0;
        this.scoreMultiplier = 1;
        this.spawnWall = false;
    }

    processFrame(){
        this.score += this.scoreMultiplier * 1;
        this.frameTicker += 1;
        this.spawnWall = (this.frameTicker == this.wallSpawnRate) ? true : false
    }
}