var natureOfCode = natureOfCode || {};


natureOfCode.BouncingBallWithNoVectors = function (canvas) {
    "use strict";

    canvas = natureOfCode.extendCanvas(canvas);

    var x = 0,
        y = 0,
        width = 800,
        height = 200,
        ballRadius = 10,
        ballColor = '#00ff00',
        xspeed = 1,
        yspeed = 3.3,
        refreshRate = 40,
        backgroundColor = '#eeeeee',

        setup = function () {
            canvas.width = width;
            canvas.height = height;
            canvas.clear(canvas);
        },

        draw = function () {
            canvas.clear(backgroundColor);

            x = x + xspeed;
            y = y + yspeed;
            //console.log(x + ',' + y);

            if ((x > width) || (x < 0)) {
                xspeed = xspeed * -1;
            }
            if ((y > height) || (y < 0)) {
                yspeed = yspeed * -1;
            }

            canvas.drawBall(x, y, ballRadius, ballColor);

            setTimeout(draw, refreshRate);
        },

        run = function () {
            setup();
            draw();
        };

    return {run: run};
};