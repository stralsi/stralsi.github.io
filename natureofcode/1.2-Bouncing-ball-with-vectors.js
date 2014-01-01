var natureOfCode = natureOfCode || {};


natureOfCode.BouncingBallWithVectors = function (canvas) {
    "use strict";
    var location  = new natureOfCode.Vector2D(0, 0),
        velocity = new natureOfCode.Vector2D(1, 3.3),
        width = 800,
        height = 200,
        ballRadius = 10,
        ballColor = '#00ff00',

        refreshRate = 40,
        backgroundColor = '#eeeeee',

        clear = function () {
            var context = canvas.getContext('2d');
            context.clearRect(0, 0, width, height);
            context.fillStyle   = backgroundColor;
            context.fillRect(0, 0, width, height);
        },

        setup = function () {
            canvas.width = width;
            canvas.height = height;
            clear(canvas);
        },

        draw = function () {
            clear(canvas);

            location = location.addVector(velocity);

            if ((location.x > width) || (location.x < 0)) {
                velocity.x = velocity.x * -1;
            }
            if ((location.y > height) || (location.y < 0)) {
                velocity.y = velocity.y * -1;
            }


            var context = canvas.getContext('2d');

            context.beginPath();
            context.arc(location.x, location.y, ballRadius, 0, 2 * Math.PI, false);
            context.fillStyle = ballColor;
            context.fill();

            setTimeout(draw, refreshRate);
        },

        run = function () {
            setup();
            draw();
        };

    return {run: run};
};