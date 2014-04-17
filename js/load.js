var load_state = { 

    //load some assets for games
    preload: function() { 
        this.game.stage.backgroundColor = '#FF8200'; //orange background color
        game.load.image('Belt', 'assets/belt.png'); //belt
        game.load.image('ball', 'assets/ball.png'); //ball
        game.load.image('background', 'assets/background.jpg'); //background img
    },
    
    create: function() {
        // When all assets are loaded, go to the 'menu' state
        this.game.state.start('menu'); //go to menu.js
    }
};