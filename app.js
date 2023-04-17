import Bird from './bird.js'
import Wall from './wall.js'
import Game from './game.js'

window.addEventListener('DOMContentLoaded', (event) => {
  //Game Display Intialization
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  //Game Objects
  const images = {};
  let bird = new Bird();
  let wallSet = [ new Wall() ];
  let game = new Game();

  //Load Game Images
  load_images("bird", 8);

  //Start gameloop
  let gameLoop = window.setInterval(iterateGameLoop, 20);
  
  function load_images(nameSet, maxImgNum){
    for(let i = 1; i <= maxImgNum; i++){
      const name = `${nameSet}-${i}`;
      const src = `./img/${nameSet}/${name}.png`;
      const element = document.createElement("img");
      element.setAttribute('src', src);
      images[name] = element;
    }
  }

  function draw(img, x, y){
    ctx.drawImage(img, x, y);
  }
  
  function clearScreen(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function endGame(){
    clearInterval(gameLoop);
  }

  function iterateGameLoop(){
    clearScreen()
    animateFatBird()
    animateWalls()
    spawnWall()
    destoryWalls()

    //Main game loop
    game.processFrame()
    checkOutOfBounds()
    // collisionDetect()
    checkForWin()
  }

  function animateFatBird(){
    bird.nextFrame();
    bird.move()
    const img_name = `bird-${bird.getFrame()}`;
    draw(images[img_name], 250, bird.getY())
  }

  function animateWalls(){
    wallSet.forEach((wall)=>{
      wall.nextFrame();
      for (let x = 1; x <= wall.getSize();  x++) {
        let distance_from_bottom = 600 - ( x * 64);
        let distance_from_top = (x - 1) * 64;
        draw(wall.getImgSrc(), wall.getX(), distance_from_bottom);
        draw(wall.getImgSrc(), wall.getX(), distance_from_top);
      }
    })
  }

  function destoryWalls(){
    let firstWall = wallSet[0];
    if(firstWall.checkDestory()){
      wallSet.shift()
    }
  }

  function spawnWall(){
    if (game.checkWallSpawn()){
      wallSet.push(new Wall());
    }
  }

  function checkOutOfBounds(){
    if(bird.detectOutOfBounds()){endGame();}
  }

  canvas.addEventListener('mousedown', function (event) {
    console.log('mouseup');
    bird.flyAction();
  });

  function checkForWin(){
    if (game.checkWin()){
      alert( ` Congratulations, you have beat fattyBird!! `);
    }
    endGame()
  }

})