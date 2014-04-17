var menu_state = {
    create: function() {
        // Call the 'start' function when pressing the spacebar
        var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.start, this); //start the game when space_key down

        // Defining variables
        var style = { font: "30px Arial", fill: "#ffffff" };
        var x = game.world.width/2, y = game.world.height/2;
        
        // Adding a text centered on the screen
        var text = this.game.add.text(x, y-50, "Press space to start", style);
        text.anchor.setTo(0.5, 0.5); 

        // If the user already played
        if (computerScore>0 || playerScore>0) {
            // Display scores
            var score_label = this.game.add.text(x, y+50, "Computer "+ computerScore +" - Player "+playerScore, style);
            score_label.anchor.setTo(0.5, 0.5); 
        }
    },

    // Start the game
    start: function() {
        this.game.state.start('play'); //go to play.js
    }
};