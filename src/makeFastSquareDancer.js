var makeFastSquareDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  const generateRandomColorValue = () => {
    let redValue = Math.floor((Math.random() * 256));
    let greenValue = Math.floor((Math.random() * 256));
    let blueValue = Math.floor((Math.random() * 256));
    return `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  };

  this.$node = $(`<span class="square-dancer" style="height: 60px; width: 60px; background-color: ${generateRandomColorValue()}"></span>`)
  // this.$node = $(`<span class="square-dancer" style="height: 325px; width: 355px; background-image: url('https://media.giphy.com/media/UO5elnTqo4vSg/giphy.gif')"></span>`)
  this.setPosition(top,left)
};

makeFastSquareDancer.prototype = Object.create(makeDancer.prototype);
makeFastSquareDancer.prototype.constructor = makeFastSquareDancer;

makeFastSquareDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.toggle();
};

makeFastSquareDancer.prototype.lineUp = function() {

};