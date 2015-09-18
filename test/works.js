import assert from 'assert';

describe('test setup works?', function() {
  it('i hope', function() {
    assert.equal(1, 1);
  });
});

function tick() {
  return {};
}
describe('game of life', function() {
  it('an empty universe is empty in the next generation', function() {
    let universe = {
      
    };
    
    let nextGeneration = tick();
    
    assert.deepEqual(nextGeneration, {});
  });

  it('a universe of one cell is empty in next generation', function() {
    let universe = {
      oneCell: {}
    };

    let nextGeneration = tick();
    
    assert.deepEqual(nextGeneration, {});
  });
});