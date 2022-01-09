var gameState = "wait"
var jumpS,coinS,fireS;
var titS,tipB,playB,tipBI,playBI,lv1BgI,lv1bg;
var player , playerRunningR,playerIdle,playerRunningL,f,fi,deathI;
var plat1,plat2,plat3,plat4,plat5,plat6,plat7,plat8,plat9,plat10,plat11,plat12,plat13
,plat14,plat15,plat16,plat17;
var f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13,f14,f15,f16,f17,f18,f19,f20,fImage;
var p1,p2,p3,p4;
var coin,coinI;
var invGround;
var tunnel1,tunnel2,tunnel3,tunnel4,tunnel5,tunnel6;
var tImage,pImage,tImage2;
var p1,p2,p3,p4,p5;
var invLine1,invLine2,scaryFlower1,scaryFlower2,flowerI,inv1,inv2,inv3,inv4,inv5;
var birdGrp,birdImage,birds;
var ball1,ball2,ball1Grp,ball2Grp;
var dino,dinoImg,fire,fireImg,fireGrp;
var bee,beeImg,beeGrp;
var dagger,daggerImg,daggerGrp;
var c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17;
var berry , berryImg, star,starImg,starGrp;
var lives = 3;
var coins = 0;
var coinBanner,coinbannerI;
var clickSound,coinSound,eatSound;
var gameOver,gameOverImage,restartButton;
var torch,torchImage,cave,caveImage;
function preload(){
  //loading images
  lv1BgI = loadImage("images/lv1bg.jpg")
    titS = loadImage("images/titleScreen.png")
    tipBI = loadImage("images/tips.png")
    playBI = loadImage("images/play.png")
    playerIdle = loadAnimation("images/Idle__000.png","images/Idle__001.png","images/Idle__002.png","images/Idle__003.png")
    playerRunningR = loadAnimation("images/Run__000.png","images/Run__001.png","images/Run__002.png"
    ,"images/Run__003.png","images/Run__004.png","images/Run__005.png")
    playerRunningL = loadAnimation("images/Run__006.png","images/Run__007.png","images/Run__008.png","images/Run__009.png",
    "images/Run__0010.png","images/Run__0011.png")
    p1 = loadImage("images/p1.png");
    p2 = loadImage("images/p2.png");
    p3 = loadImage("images/p3.png");
    p4 = loadImage("images/p4.png");
    coinI = loadImage("images/coin.gif")
    tImage = loadImage("images/pipe.png")
    tImag2 = loadImage("images/pipe2.png")
    pImage = loadImage("images/porcupine.png")
    flowerI = loadImage("images/flower.gif")
    birdImage = loadImage("images/bird.gif")
    ballI = loadImage("images/ball.png")
    dinoImg = loadImage("images/dino.png")
    fireImg = loadImage("images/fire.png")
    beeImg = loadImage("images/bee.png")
    daggerImg = loadImage("images/Kunai.png")
    berryImg = loadImage("images/berry.png")
    starImg = loadImage("images/star.png")
    berryImg = loadImage("images/berry.png")
    coinbannerI = loadImage("images/coinbanner.png")
    gameOverImage = loadImage("images/gameover.png")
    deathI = loadImage("images/dead.png")
    torchImage = loadImage("images/torch.png")
    caveImage = loadImage("images/cave.png")
    fImage = loadImage("images/fire3.png")
    // loading sounds
    clickSound = loadSound("sound/click.mp3")
    coinSound = loadSound("sound/coin.wav")
    eatSound = loadSound("sound/eatSound.wav")
}
function setup(){
    createCanvas(windowWidth,windowHeight);
  
  //backgrounds
    lv1bg = createSprite(width/2,height/2,width*5,displayHeight)
    lv1bg.addImage(lv1BgI)
    lv1bg.visible = false;
    lv1bg.scale = 1.5;
    invGround = createSprite(0,670,50000,20)
    invGround.visible = false;

    //creating play and tips button
     playB = createSprite(850,455,200,50)
     playB.addImage(playBI);
     playB.scale = 0.5
     tipB = createSprite(850,485,200,50)
     tipB.addImage(tipBI);
     tipB.scale = 0.5

     // create groups for obstacles
     fireGrp = createGroup();
     birdGrp = createGroup();
     ball1Grp = createGroup();
     ball2Grp = createGroup();
     starGrp = createGroup();
     daggerGrp = createGroup();
     beeGrp = createGroup(); 
     //lv1 platforms
     plat1 = createSprite(225,450,10,20)
     plat1.addImage(p2)
     plat1.scale = 0.7;
     plat1.visible = false;
     plat1.debug = false;
     plat1.setCollider("rectangle",-230,100,60,50)
     plat2 = createSprite(285,420,10,20)
     plat2.addImage(p1)
     plat2.scale = 0.5;
     plat2.debug = false;
     plat2.setCollider("rectangle",-130,-80,220,50)
     plat2.visible = false;
     plat3 = createSprite(505,450,10,20)
     plat3.addImage(p2)
     plat3.scale = 0.7;
     plat3.setCollider("rectangle",-230,100,60,50)
     plat3.debug = false;
     plat3.visible = false;
     plat4 = createSprite(660,400,10,20)
     plat4.addImage(p2)
     plat4.scale = 0.7;
     plat4.debug = false;
     plat4.setCollider("rectangle",-230,100,60,50)
     plat4.visible = false;
     plat5 = createSprite(1280,450,10,20)
     plat5.addImage(p2)
     plat5.scale = 0.7;
     plat5.debug = false;
     plat5.setCollider("rectangle",-230,100,60,50)
     plat5.visible = false;
     plat6 = createSprite(1390,380,10,20)
     plat6.addImage(p2)
     plat6.scale = 0.7;
     plat6.debug = false;
     plat6.setCollider("rectangle",-230,100,60,50)
     plat6.visible = false;
     plat7 = createSprite(1500,330,10,20)
     plat7.addImage(p2)
     plat7.scale = 0.7;
     plat7.debug = false;
     plat7.setCollider("rectangle",-230,100,60,50)
     plat7.visible = false;
     plat8 = createSprite(plat7.x+10,550,10,20)
     plat8.addImage(p1)
     plat8.scale = 0.4;
     plat8.debug = false;
     plat8.setCollider("rectangle",-130,-80,200,50)
     plat8.visible = false;
     plat9 = createSprite(2350,550,10,20)
     plat9.addImage(p2)
     plat9.scale = 0.7;
     plat9.debug = false;
     plat9.setCollider("rectangle",-230,100,60,50)
     plat9.visible = false;
     plat10 = createSprite(plat9.x+50,plat9.y-50,10,20)
     plat10.addImage(p2)
     plat10.scale = 0.7;
     plat10.debug = false;
     plat10.setCollider("rectangle",-230,100,60,50)
     plat10.visible = false;
     plat11 = createSprite(plat10.x+50,plat10.y-50,10,20)
     plat11.addImage(p2)
     plat11.scale = 0.7;
     plat11.debug = false;
     plat11.setCollider("rectangle",-230,100,60,50)
     plat11.visible = false;
     plat12 = createSprite(plat11.x+50,plat11.y-50,10,20)
     plat12.addImage(p2)
     plat12.scale = 0.7;
     plat12.debug = false;
     plat12.setCollider("rectangle",-230,100,60,50)
     plat12.visible = false;
     plat13 = createSprite(plat12.x+150,plat12.y,10,20)
     plat13.addImage(p2)
     plat13.scale = 0.7;
     plat13.debug = false;
     plat13.setCollider("rectangle",-230,100,60,50)
     plat13.visible = false;
     plat14 = createSprite(plat13.x+50,plat12.y+50,10,20)
     plat14.addImage(p2)
     plat14.scale = 0.7;
     plat14.debug = false;
     plat14.setCollider("rectangle",-230,100,60,50)
     plat14.visible = false;
     plat15 = createSprite(plat14.x+50,plat14.y+50,10,20)
     plat15.addImage(p2)
     plat15.scale = 0.7;
     plat15.debug = false;
     plat15.setCollider("rectangle",-230,100,60,50)
     plat15.visible = false;
     plat16 = createSprite(plat15.x+50,plat15.y+50,10,20)
     plat16.addImage(p2)
     plat16.scale = 0.7;
     plat16.debug = false;
     plat16.setCollider("rectangle",-230,100,60,50)
     plat16.visible = false;
    // obstacles lv1
    p1 = createSprite(795,650,30,20);
    p1.addImage(pImage);
    p1.scale = 0.15;
    p1.visible = false;
    dino = createSprite(plat8.x - 50,invGround.y - 60,20,30)
    dino.addImage(dinoImg);
    dino.scale = 0.3;
    dino.visible = false;
    //tunnels
    tunnel1 = createSprite(790,580,20,30)
    tunnel1.addImage(tImage);
    tunnel1.scale = 0.4;
    tunnel1.visible = false;
    tunnel2 = createSprite(plat7.x+200,580,20,30)
    tunnel2.addImage(tImage);
    tunnel2.scale = 0.4;
    tunnel2.visible = false;
    tunnel3 = createSprite(tunnel2.x+250,580,20,30)
    tunnel3.addImage(tImage);
    tunnel3.scale = 0.4;
    tunnel3.visible = false;
    tunnel4 = createSprite(tunnel3.x,100,20,30)
    tunnel4.addImage(tImag2);
    tunnel4.scale = 0.4;
    tunnel4.visible = false;
    tunnel5 = createSprite(tunnel2.x,100,20,30)
    tunnel5.addImage(tImag2);
    tunnel5.scale = 0.4;
    tunnel5.visible = false;
    tunnel1.setCollider("rectangle",2,0,140,tunnel1.height-50);
    tunnel2.debug = false;
    tunnel2.setCollider("rectangle",2,0,140,tunnel2.height-50);
    tunnel3.debug = false;
    tunnel3.setCollider("rectangle",2,0,140,tunnel3.height-50);
    tunnel4.debug = false;
    tunnel4.setCollider("rectangle",2,0,140,tunnel4.height-50);
    tunnel5.debug = false;
    tunnel5.setCollider("rectangle",2,0,140,tunnel5.height-50);
    //creating player sprite
     player = createSprite(0,615,30,30);
     player.addAnimation("idle",playerIdle)
     player.addAnimation("runningR",playerRunningR)
     player.addAnimation("runningL",playerRunningL)
     player.scale = 0.2;
     player.visible = false;
     //inv lines and platforms
     invLine1 = createSprite(player.x-100,200,50,20000);
     invLine1.visible = false;
     invLine2 = createSprite(plat15.x+250,200,50,20000);
     invLine2.visible = false;
     inv1 = createSprite(tunnel1.x-150,tunnel1.y+50,40,1500)
     inv1.visible = false;
    // coins and berries to collect 
    c1 = createSprite(65,459,10,10)
    c1.addImage(coinI);
    c1.scale = 0.4;
    c1.visible = false;
    c2 = createSprite(225,340,10,10)
    c2.addImage(coinI);
    c2.scale = 0.4;
    c2.visible = false;
    c3 = createSprite(1226,400,10,10)
    c3.addImage(coinI);
    c3.scale = 0.4;
    c3.visible = false;
    c4 = createSprite(1465,470,10,10)
    c4.addImage(coinI);
    c4.scale = 0.4;
    c4.visible = false;
    c5 = createSprite(2236,500,10,10)
    c5.addImage(coinI);
    c5.scale = 0.4;
    c5.visible = false;
    c6 = createSprite(2186,550,10,10)
    c6.addImage(coinI);
    c6.scale = 0.4;
    c6.visible = false;
    c7 = createSprite(2286,450,10,10)
    c7.addImage(coinI);
    c7.scale = 0.4;
    c7.visible = false;
    c8 = createSprite(2336,420,10,10)
    c8.addImage(coinI);
    c8.scale = 0.4;
    c8.visible = false;
    berry = createSprite(tunnel1.x,tunnel1.y-50,20,20)
    berry.addImage(berryImg);
    berry.scale=0.2
    berry.depth = tunnel1.depth - 1;
    berry.visible = false;
    coinBanner = createSprite(player.x-100,tunnel5.y,20,20)
    coinBanner.addImage(coinbannerI)
    coinBanner.scale = 0.1
    plat17 = createSprite(tunnel2.x+300,tunnel2.y-150,30,30)
    plat17.addImage(p2)
    plat17.scale = 0.7;
    plat17.debug = false;
    plat17.setCollider("rectangle",-230,100,60,50)
    plat17.visible = false;
 // gameover gamewin and levelup sprites
   gameOver = createSprite(player.x+10,player.y-250,50,50)
   gameOver.addImage(gameOverImage);
   gameOver.scale = 0.3
   gameOver.visible = false;
   // cave and torch
   torch = createSprite(plat11.x-20,invGround.y-30,20,30)
   torch.addImage(torchImage)
   torch.scale = 0.3;
   torch.visible = false;
   cave = createSprite(invLine2.x+50,invGround.y-100,100,50)
   cave.addImage(caveImage);
   cave.scale = 0.7
   cave.visible = false;
   // restart button
   restartButton = createSprite(gameOver.x+500,gameOver.y+650,80,100)
   restartButton.visible = false;


   //lv2 obs,platfrom
   f1 = createSprite(10,invGround.y,20,20)
   f1.addImage(fImage);
   f1.scale = 0.2;
   f2 = createSprite(100,invGround.y,20,20)
   f2.addImage(fImage);
   f2.scale = 0.2;
   f3 = createSprite(190,invGround.y,20,20)
   f3.addImage(fImage);
   f3.scale = 0.2;
   f4 = createSprite(280,invGround.y,20,20)
   f4.addImage(fImage);
   f4.scale = 0.2;
   f5 = createSprite(370,invGround.y,20,20)
   f5.addImage(fImage);
   f5.scale = 0.2;
   f6 = createSprite(460,invGround.y,20,20)
   f6.addImage(fImage);
   f6.scale = 0.2;
   f7 = createSprite(550,invGround.y,20,20)
   f7.addImage(fImage);
   f7.scale = 0.2;
   f8 = createSprite(640,invGround.y,20,20)
   f8.addImage(fImage);
   f8.scale = 0.2;
   f9 = createSprite(730,invGround.y,20,20)
   f9.addImage(fImage);
   f9.scale = 0.2;
   f10 = createSprite(820,invGround.y,20,20)
   f10.addImage(fImage);
   f10.scale = 0.2;
   f11 = createSprite(910,invGround.y,20,20)
   f11.addImage(fImage);
   f11.scale = 0.2;
   f12 = createSprite(1000,invGround.y,20,20)
   f12.addImage(fImage);
   f12.scale = 0.2;
   f13 = createSprite(1090,invGround.y,20,20)
   f13.addImage(fImage);
   f13.scale = 0.2;
   f14 = createSprite(1180,invGround.y,20,20)
   f14.addImage(fImage);
   f14.scale = 0.2;
   f15 = createSprite(1270,invGround.y,20,20)
   f15.addImage(fImage);
   f15.scale = 0.2;
   f16 = createSprite(1360,invGround.y,20,20)
   f16.addImage(fImage);
   f16.scale = 0.2;
   f17 = createSprite(1450,invGround.y,20,20)
   f17.addImage(fImage);
   f17.scale = 0.2;
   f1.visible = false;
   f2.visible = false;
   f3.visible = false;
   f4.visible = false;
   f5.visible = false;
   f6.visible = false;
   f7.visible = false;
   f8.visible = false;
   f9.visible = false;
   f10.visible = false;
   f11.visible = false;
   f12.visible = false;
   f13.visible = false;
}

function draw(){
console.log(mouseX,mouseY);
  if(gameState === "wait"){
  background(titS);

  if(mousePressedOver(playB)){
   clickSound.play();
   gameState = "lv1";
}
  }

  if(gameState === "lv1"){
    coinBanner.x = player.x-100;
    coinBanner.y = tunnel5.y;
    lv1bg.visible = true;
    tipB.visible = false;
    playB.visible = false;
    player.visible = true;
    plat1.visible = true;
    tunnel1.visible = true;
    tunnel2.visible = true;
    tunnel3.visible = true;
    tunnel4.visible = true;
    tunnel5.visible = true;
    c1.visible = true;
    c2.visible = true;
    c3.visible = true;
    c4.visible = true;
    c5.visible = true;
    c6.visible = true;
    c7.visible = true;
    c8.visible = true;
    cave.visible = true;
    torch.visible = true;
    berry.visible = true;
    dino.visible = true;
    p1.visible = true;
    player.depth = cave.depth + 1

    player.collide(plat1);
    player.collide(plat2);
    player.collide(plat3);
    player.collide(plat4);
    player.collide(plat5);
    player.collide(plat6);
    player.collide(plat7);
    player.collide(plat8);
    player.collide(plat9);
    player.collide(plat10);
    player.collide(plat11);
    player.collide(plat12);
    player.collide(plat13);
    player.collide(plat14);
    player.collide(plat15);
    player.collide(plat16);
    player.collide(plat17);
    player.collide(invLine1);
    player.collide(tunnel1);
    player.collide(tunnel2);
    player.collide(tunnel3);
    player.collide(tunnel4);
    player.collide(tunnel5);
    berry.collide(invGround)
    berry.collide(inv1)
    camera.x = player.x+220;
    player.collide(invGround)
    plat1.visible = true;
    plat2.visible = true;
    plat3.visible = true;
    plat4.visible = true;
    plat5.visible = true;
    plat6.visible = true;
    plat7.visible = true;
    plat8.visible = true;
    plat9.visible = true;
    plat10.visible = true;
    plat11.visible = true;
    plat12.visible = true;
    plat13.visible = true;
    plat14.visible = true;
    plat15.visible = true;
    plat16.visible = true;
    plat17.visible = true;

    spawnBirds();
    spawnFire();
    spawnBall();
    spawmBee();
    spawmDagger();

    if(player.isTouching(inv1)){
      p1.velocityX = -3;
      berry.velocityX = -2;  
      berry.velocityY = 2;
    }

    if(berry.isTouching(invGround)){
      berry.velocityX = 0;  
    }

    if(player.isTouching(beeGrp)){
      lives = lives -1;
      beeGrp.destroyEach();
      player.x = 0;
      player.y = 615;
    }
    if(player.isTouching(ball2Grp)){
      lives = lives -1;
      ball2Grp.destroyEach();
      player.x = 0;
      player.y = 615;
    }
    if(player.isTouching(ball1Grp)){
      lives = lives -1;
      ball1Grp.destroyEach();
     player.x = 0;
      player.y = 615;
    }
    if(player.isTouching(birdGrp)){
      lives = lives -1;
      birdGrp.destroyEach();
      player.x = 0;
      player.y = 615;
    }
    if(player.isTouching(fireGrp)){
      lives = lives -1;
      fireGrp.destroyEach();
      player.x = 0;
      player.y = 615;
    }
   if(player.isTouching(daggerGrp)){
      lives = lives -1;
      daggerGrp.destroyEach();
      player.x = 0;
      player.y = 615;
    }
    if(player.isTouching(p1)){
      lives = lives -1;
     player.x = 0;
      player.y = 615;
      p1.y = invGround.y + 200;
    }

    if(player.isTouching(berry)){
      berry.x = tunnel5.x;
      berry.y = tunnel5.y;
      berry.velocityX = 0;
      berry.velocityY = 0;
      eatSound.play();
    }

    if(berry.isTouching(tunnel5)){
      berry.velocityX = 0;
      berry.velocityY = 0;
    }

    if(player.isTouching(c1)){
      coins = coins+1
      c1.x = tunnel5.x;
      c1.y = tunnel5.y-200;
      c1.visible = false;
      coinSound.play();
    }
    if(player.isTouching(c2)){
      coins = coins+1
      c2.x = tunnel5.x;
      c2.y = tunnel5.y-200;
      c2.visible = false;
      coinSound.play();
    }
    if(player.isTouching(c3)){
      coins = coins+1
      c3.x = tunnel5.x;
      c3.y = tunnel5.y-200;
      c3.visible = false;
      coinSound.play();
    }
    if(player.isTouching(c4)){
      coins = coins+1
      c4.x = tunnel5.x;
      c4.y = tunnel5.y-200;
      c4.visible = false;
      coinSound.play();
    }
    if(player.isTouching(c5)){
      coins = coins+1
      c5.x = tunnel5.x;
      c5.y = tunnel5.y-200;
      c5.visible = false;
      coinSound.play();
    }
    if(player.isTouching(c6)){
      coins = coins+1
      c6.x = tunnel5.x;
      c6.y = tunnel5.y-200;
      c6.visible = false;
      coinSound.play();
    }
    if(player.isTouching(c7)){
      coins = coins+1
      c7.x = tunnel5.x;
      c7.y = tunnel5.y-200;
      c7.visible = false;
      coinSound.play();
    }
    if(player.isTouching(c8)){
      coins = coins+1
      c8.x = tunnel5.x;
      c8.y = tunnel5.y-200;
      c8.visible = false;
      coinSound.play();
    }
    if(player.isTouching(torch)){
      torch.scale = 0.1;
      torch.x = player.x+15;
      torch.y = player.y
    }
    if(player.isTouching(invLine2)){
      gameState = "lv2";
     
    }

    if(lives === 0){
      gameState = "end"
      player.x = 0;
      player.y = invGround.y;
      camera.x = player.x;
    }

    if(keyCode === 32 && berry.isTouching(tunnel5)){
     var temp_stars =  createStars();
     temp_stars.addImage(starImg)
     temp_stars.lifetime = 50;
     temp_stars.x = player.x+25;
     temp_stars.y = player.y-15;
       console.log("hey")
    }

    if(keyDown("LEFT_ARROW")){
      player.changeAnimation("runningL",playerRunningL);
      player.x = player.x-5;
    }else{
      player.changeAnimation("idle",playerIdle)
    }
    if(keyDown("RIGHT_ARROW")){
      player.changeAnimation("runningR",playerRunningR);
      player.x = player.x+5;  
    }
    if(keyDown("UP_ARROW")){
      player.velocityY = -5
    }
    player.velocityY = player.velocityY + 1
  }

  // end state 
  if(gameState === "end"){

    gameOver.x = player.x;
    gameOver.y = player.y-250;
    restartButton.x = gameOver.x+170;
    restartButton.y = gameOver.y+110;
    player.velocityY = 0;
    player.velocityX = 0;
    gameOver.visible = true;
  }

  if(gameState === "lv2"){
    background("black")
    //collision , camera , visibility , lives
    player.collide(invGround)
   // camera.x = player.x;
    cave.visible = false;
    lives = 3;
    plat1.visible = false;
    lv1bg.visible = false;
    plat2.visible = false;
    plat3.visible = false;
    plat4.visible = false;
    plat5.visible = false;
    plat6.visible = false;
    plat7.visible = false;
    plat8.visible = false;
    plat9.visible = false;
    plat10.visible = false;
    plat11.visible = false;
    plat12.visible = false;
    plat13.visible = false;
    plat14.visible = false;
    plat15.visible = false;
    plat16.visible = false;
    plat17.visible = false;
    tunnel1.visible = false;
    tunnel2.visible = false;
    tunnel3.visible = false;
    tunnel4.visible = false;
    tunnel5.visible = false;
    dino.visible = false;
    coinBanner.visible = false;
    f1.visible = true;
    f2.visible = true;
    f3.visible = true;
    f4.visible = true;
    f5.visible = true;
    f6.visible = true;
    f7.visible = true;
    f8.visible = true;
    f9.visible = true;
    f10.visible = true;
    f11.visible = true;
    f12.visible = true;
    f13.visible = true;
    
   // key movements
   if(keyDown("LEFT_ARROW")){
    player.changeAnimation("runningL",playerRunningL);
    player.x = player.x-5;
  }else{
    player.changeAnimation("idle",playerIdle)
  }
  if(keyDown("RIGHT_ARROW")){
    player.changeAnimation("runningR",playerRunningR);
    player.x = player.x+5;  
  }
  if(keyDown("UP_ARROW")){
    player.y = player.y-5;
  }
  if(keyDown("DOWN_ARROW")){
    player.y = player.y+5;
  }
 

  }

  if(mousePressedOver(restartButton)){
    reset();
    clickSound.play();
  }

  drawSprites();

  if(gameState === "lv1"){
    textSize(20)
    fill("white")
    text(coins, coinBanner.x-8, coinBanner.y+8)
    textSize(30)
    fill("white")
    text("Lives :"+lives,player.x + 100,tunnel5.y)
  }
  if(gameState === "lv2"){
    textSize(30)
    fill("white")
    text("Lives :"+lives,player.x + 100,tunnel5.y)
  }
 
}

// function to spawn birds 
function spawnBirds(){
  if(frameCount % 90 === 0){
    birds = createSprite(plat11.x+200,385,30,30)
    birds.addImage(birdImage)
    birds.scale = 0.3
    birds.depth = player.depth - 1;
    birds.velocityX = -3;
    birds.lifetime = 80;
    birdGrp.add(birds);
  }
}

function spawnFire(){
if(frameCount%60 ===0){
  fire = createSprite(dino.x-2,dino.y-2,10,10)
  fire.addImage(fireImg);
  fire.scale = 0.1;
  fire.lifetime = 160;
  fire.velocityX = -3;
  fireGrp.add(fire)
  fire.depth = player.depth - 1;
}
}

function spawnBall(){
  if(frameCount % 120 ===0){
    ball1 = createSprite(tunnel1.x+385,invGround.y,10,10)
    ball1.addImage(ballI);
    ball1.scale = 0.09;
    ball1.velocityY = -3;
    ball1Grp.add(ball1)
    ball1.depth = player.depth - 1;
  }
  if(frameCount % 90 ===0){
    ball2 = createSprite(tunnel1.x+497,invGround.y,10,10)
    ball2.addImage(ballI);
    ball2.scale = 0.09;
    ball2.velocityY = -5;
    ball2Grp.add(ball2)
    ball2.depth = player.depth - 1;
  }
}

function spawmBee(){
  if (frameCount % 60 === 0){
    bee = createSprite(tunnel5.x,tunnel5.y,10,10)
    bee.addImage(beeImg);
    bee.scale = 0.2;
    bee.velocityY = 5;
    bee.lifetime = 60;
    bee.depth  = player.depth - 1;
    beeGrp.add(bee)
    bee.depth = player.depth - 1;
    bee.depth = tunnel2.depth - 1;
  }
}

function spawmDagger(){
  if (frameCount % 60 === 0){
    dagger = createSprite(tunnel4.x,tunnel4.y,10,10)
    dagger.addImage(daggerImg);
    dagger.scale = 0.5;
    dagger.velocityY = 5;
    dagger.lifetime = 65;
    dagger.depth  = player.depth - 1;
    daggerGrp.add(dagger)
    dagger.depth = player.depth - 1;
    dagger.depth = tunnel4.depth - 1;
  }
}

function createStars(){
  var star = createSprite(player.x+25,player.y-15,10,10);
  star.velocityX = 6;
  star.scale = 0.1;
  starGrp.add(star);
  return star;
}

function reset(){
  coins = 0,
 gameOver.visible = false ,
 p1.velocityX = 0,
 berry.velocityY = 0,
 berry.velocityX = 0,
 torch.x = plat11.x-20,
 torch.y = invGround.y-30,
gameState = "lv1"
lives = 3;
player.x = 0,
player.y = 615,
c1.x = 65,
c1.y = 459,
c2.x = 225,
c2.y = 340,
c3.x = 1226,
c3.y = 400,
c4.x = 1465,
c4.y = 470,
c5.x = 2236,
c5.y = 500,
c6.x = 2186,
c6.y = 550,
c7.x = 2286,
c7.y =450,
c8.x = 2336,
c8.y =  420,
berry.x = tunnel1.x,
berry.y =  tunnel1.y-50,
p1.x = 795,
p1.y = 650,
c1.visible = true,
c2.visible = true,
c3.visible = true,
c4.visible = true,
c5.visible = true,
c6.visible = true,
c7.visible = true,
c7.visible = true

}