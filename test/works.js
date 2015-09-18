import assert from 'assert';

describe('test setup works?', function() {
  it('i hope', function() {
    assert.equal(1, 1);
  });
});

describe('game of life', function() {
  it('an empty universe is empty in the next generation', function() {
    let universe = {
      
    };
    
    let nextGeneration = universe;
    
    assert.deepEqual(nextGeneration, {});
  });
});