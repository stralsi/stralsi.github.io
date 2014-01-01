var natureOfCode = natureOfCode || {};


natureOfCode.BouncingBallWithVectors = function (canvas) {
    "use strict";
    canvas = natureOfCode.extendCanvas(canvas);

    var location  = new natureOfCode.Vector2D(0, 0),
        velocity = new natureOfCode.Vector2D(1, 3.3),
        width = 800,
        height = 200,
        ballRadius = 10,
        ballColor = '#00ff00',

        refreshRate = 40,
        backgroundColor = '#eeeeee',

        draw = function () {
            canvas.clear(backgroundColor);

            location = location.addVector(velocity);

            if ((location.x > width) || (location.x < 0)) {
                velocity.x = velocity.x * -1;
            }
            if ((location.y > height) || (location.y < 0)) {
                velocity.y = velocity.y * -1;
            }

            canvas.drawBall(location.x, location.y, ballRadius, ballColor);

            setTimeout(draw, refreshRate);
        },

        setup = function () {
            canvas.width = width;
            canvas.height = height;
            canvas.clear(backgroundColor);
        },

        run = function () {
            setup();
            draw();
        };

    return {run: run};
};