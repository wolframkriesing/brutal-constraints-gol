import assert from 'assert';

describe('test setup works?', function() {
  it('i hope', function() {
    assert.equal(1, 1);
  });
});

function tick() {
  return {};
}
describe('universe', function() {
  describe('next generation', function() {
    it('of empty universe is empty', function() {
      let universe = {
        
      };
      
      let nextGeneration = tick();
      
      assert.deepEqual(nextGeneration, {});
    });
  
    it('of one cell is empty', function() {
      let universe = {
        oneCell: {}
      };
  
      let nextGeneration = tick();
      
      assert.deepEqual(nextGeneration, {});
    });
  
    it('of three diagonal cells contains middle cell', function() {
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
});