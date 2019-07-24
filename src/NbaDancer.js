var makeNbaDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  var array = ['deandre','dlo','dj','lance','russ','shaq'];
  var gif = array[Math.floor(Math.random() * 6)];
  this.$node = $(`<img src="gifs/${gif}.gif" class='img' id='nba' style="width:100px;height:100px;position:absolute;border-radius:50px;">`);
  this.setPosition(top,left);
};

makeNbaDancer.prototype = Object.create(makeDancer.prototype);
makeNbaDancer.prototype.constructor = makeNbaDancer;