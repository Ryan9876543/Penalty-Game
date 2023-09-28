var canvas;
var backgroundImage
var player1_img, player2_img, keeper
var shot_img, keeper_img
var ball
var database, gameState;
var form, player, player2, playerCount;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/goalpost.png");
  player1_img = loadImage("./assets/player.png");
  player2_img = loadImage("./assets/keeper.png");
  ball = loadImage ("./assets/ball.png")
  save = loadAnimation ("./assets/keeper.png", "./assets/dive.png")
  save2 = loadAnimation ("./assets/keeper.png", "./assets/dive2.png")
  save3 = loadAnimation ("./assets/keeper.png", "./assets/dive3.png")
  shot = loadAnimation ("./assets/player.png", "./assets/shot.png")
  shot2 = loadAnimation("./assets/player.png", "./assets/shot2.png")



 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
