var natureOfCode = natureOfCode || {};

natureOfCode.extendCanvas = function (canvas) {
    "use strict";

    canvas.clear = function (backgroundColor) {

        if (!backgroundColor) {
            backgroundColor = '#000000';
        }

        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle   = backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
    };

    canvas.drawBall = function (x, y, radius, ballColor) {
        var context = canvas.getContext('2d');
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI, false);
        context.fillStyle = ballColor;
        context.fill();
    };
    
    return canvas;
};