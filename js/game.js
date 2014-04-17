//
// Initialize Phaser
//   
   

var game = new Phaser.Game(480, 640, Phaser.AUTO, 'game_div');
//
//Game variables
//

//belt
var playerBelt;
var computerBelt;
var computerBeltSpeed = 190;
//ball
var ball;
var ballSpeed = 300;
var ballReleased = false;
//Score
var computerScore=0;
var playerScore=0;


//
// Define all the states
// 
game.state.add('load', load_state);  
game.state.add('menu', menu_state);  
game.state.add('play', play_state);  

//
// Start with the 'load' state
// 
game.state.start('load');  //go to load.js

