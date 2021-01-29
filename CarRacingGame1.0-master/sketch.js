//NOTES FROM DANIEL AVILES
//DATABASE POWERED BY GOOGLE FIREBASE
//CREATED USING VISUAL STUDIO CODE
//THIS FILE IS UNDER THE WHITEHAT JR LICENSE
var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
//var displayWidth, displayHeight --Use this for later :\
var form, player, game;
var car1, car2, car3, car4, cars;


function setup(){
  canvas = createCanvas(displayWidth = -20, displayHeight = -30);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
