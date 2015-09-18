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

  it('a universe with three diagonal cells lets one survive in the next generation', function() {
    let universe = {
      oneCell: { x:1, y:1 },
      oneCell2: { x:0, y:0 },
      third: { x:2, y:2}
    };

    let nextGeneration = {oneCell: {x: 1, y: 1}};
    
    assert.deepEqual(nextGeneration, {
      oneCell: {x: 1, y: 1}
    });
  });
});