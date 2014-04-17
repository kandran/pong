var play_state = {

    // No more preload, since it is already done in the 'load' state


    create: function() { 
        //create world
        game.add.tileSprite(0, 0, 480, 640, 'background');
        //create belts
        playerBelt = this.createBelt(game.world.centerX, 600);
        computerBelt = this.createBelt(game.world.centerX, 20);

        //create ball and init this behaviour
        ball = game.add.sprite(game.world.centerX, game.world.centerY, 'ball');
        ball.anchor.setTo(0.5, 0.5);
        ball.body.collideWorldBounds = true; //collide management
        ball.body.bounce.setTo(1, 1);
        game.input.onDown.add(this.releaseBall, this); //on click release the ball
    },

    //update the game
    update: function() {


       //Control the player's racket
        playerBelt.x = game.input.x;
        var playerBeltHalfWidth = playerBelt.width / 2;

        if (playerBelt.x < playerBeltHalfWidth) {
            playerBelt.x = playerBeltHalfWidth;
        } else if (playerBelt.x > game.width - playerBeltHalfWidth) {
            playerBelt.x = game.width - playerBeltHalfWidth;
        }


        //Control the computer's racket
        if(computerBelt.x - ball.x < -15) {
            computerBelt.body.velocity.x = computerBeltSpeed;
        } else if(computerBelt.x - ball.x > 15) {
            computerBelt.body.velocity.x = -computerBeltSpeed;
        } else {
            computerBelt.body.velocity.x = 0;
        }

        //Check and process the collision ball and racket
        game.physics.collide(ball, playerBelt, this.ballHitsBelt, null, this);
        game.physics.collide(ball, computerBelt, this.ballHitsBelt, null, this);

        //Check to see if someone has scored a goal
        this.checkGoal(); 
    },

    //restart_game with a menu
    restart_game: function() {
    

        // This time we go back to the 'menu' state
        this.game.state.start('menu'); //go to menu.js
    },

    //when ball collide the belt
    ballHitsBelt: function(_ball, _Belt) {

        var diff = 0;

        if (_ball.x < _Belt.x) {
            //If ball is in the left hand side on the racket
            diff = _Belt.x - _ball.x;
            _ball.body.velocity.x = (-10 * diff);
        } else if (_ball.x > _Belt.x) {
            //If ball is in the right hand side on the racket
            diff = _ball.x -_Belt.x;
            _ball.body.velocity.x = (10 * diff);
        } else {
            //The ball hit the center of the racket, let's add a little bit of a tragic accident(random) of his movement
            _ball.body.velocity.x = 2 + Math.random() * 8;
        }
    },

    //check goal
    checkGoal: function() {
        //player goal
        if (ball.y < 15) {
            this.setBall();
            playerScore++;
              this.restart_game();
        } else if (ball.y > 625) { //computer goal
            this.setBall();
            computerScore++;
              this.restart_game();
        }
    },

    //set the ball with default settings
    setBall: function() {
        if (ballReleased) {
            ball.x = game.world.centerX;
            ball.y = game.world.centerY;
            ball.body.velocity.x = 0;
            ball.body.velocity.y = 0;
            ballReleased = false;
        }
    },

    //release the ball
    releaseBall: function() {
        if (!ballReleased) {
            ball.body.velocity.x = ballSpeed;
            ball.body.velocity.y = -ballSpeed;
            ballReleased = true;
        }
    },

    //create the belt
    createBelt: function(x, y) {

        
        var Belt = game.add.sprite(x, y, 'Belt');
        Belt.anchor.setTo(0.5, 0.5);
        Belt.body.collideWorldBounds = true;
        Belt.body.bounce.setTo(1, 1);
        Belt.body.immovable = true;

        return Belt;
    }

};

    

    
   


    
