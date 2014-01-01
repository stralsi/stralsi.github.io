var natureOfCode = natureOfCode || {};


natureOfCode.BouncingBallWithNoVectors = function (canvas) {
    "use strict";
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

            x = x + xspeed;
            y = y + yspeed;
            //console.log(x + ',' + y);

            if ((x > width) || (x < 0)) {
                xspeed = xspeed * -1;
            }
            if ((y > height) || (y < 0)) {
                yspeed = yspeed * -1;
            }


            var context = canvas.getContext('2d');

            context.beginPath();
            context.arc(x, y, ballRadius, 0, 2 * Math.PI, false);
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