var natureOfCode = natureOfCode || {};
//using Revealing prototype pattern because there will probably be many instances of Vector2D at the same time, and this pattern saves some memory by instantiating the functions only once, in the prototype.

natureOfCode.Vector2D = function (xPos, yPos) {
    "use strict";
    this.x = xPos;
    this.y = yPos;
};

natureOfCode.Vector2D.prototype = (function () {
    "use strict";
    var addVector = function (otherVector) {
            return new natureOfCode.Vector2D(this.x + otherVector.x, this.y + otherVector.y);
        },
        addScalar = function (scalar) {
            return new natureOfCode.Vector2D(this.x + scalar, this.y + scalar);
        },
        substractVector = function (otherVector) {
            return new natureOfCode.Vector2D(this.x - otherVector.x, this.y - otherVector.y);
        },
        substractScalar = function (scalar) {
            return new natureOfCode.Vector2D(this.x - scalar, this.y - scalar);
        },
        multiply = function (scalar) {
            return new natureOfCode.Vector2D(this.x * scalar, this.y * scalar);
        },
        divide = function (scalar) {
            return new natureOfCode.Vector2D(this.x / scalar, this.y / scalar);
        },
        magnitude = function(){
            return Math.sqrt( this.x * this.x + this.y * this.y);
        },
        normalize = function(){
            var unit = this.divide(this.magnitude);
            this.x = unit.x;
            this.y = unit.y;
        }
    return {
        addVector: addVector,
        addScalar: addScalar
    };
}());