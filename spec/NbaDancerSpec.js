describe('nbaDancer', function() {

  var nbaDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    nbaDancer = new makeNbaDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(nbaDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(nbaDancer, 'step');
      expect(nbaDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...

      expect(nbaDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(nbaDancer.step.callCount).to.be.equal(2);
    });
  });
});
