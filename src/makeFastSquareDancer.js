var makeFastSquareDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  const generateRandomColorValue = () => {
    let redValue = Math.floor((Math.random() * 256));
    let greenValue = Math.floor((Math.random() * 256));
    let blueValue = Math.floor((Math.random() * 256));
    return `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  };
  this.$node = $(`<div class="square-dancer" style="height: 150px; width: 150px; background-color: ${generateRandomColorValue()}"></div>`)
  this.setPosition(top,left);
};

makeFastSquareDancer.prototype = Object.create(makeDancer.prototype);
makeFastSquareDancer.prototype.constructor = makeFastSquareDancer;

makeFastSquareDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  const generateRandomColorValue = () => {
    let redValue = Math.floor((Math.random() * 256));
    let greenValue = Math.floor((Math.random() * 256));
    let blueValue = Math.floor((Math.random() * 256));
    return `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  };
  this.$node.css("background-color", `${generateRandomColorValue()}`);
};
