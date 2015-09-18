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
        pos1: {}
      };
  
      let nextGeneration = tick();
      
      assert.deepEqual(nextGeneration, {});
    });
  
    // first step to think of universe as single cell because only one cells
    // survives and we place other cells accordingly.
    it('of three diagonal cells contains middle cell', function() {
      let universe = {
        pos1: {x: 1, y: 1},
        pos2: { x:0, y:0 },
        pos3: { x:2, y:2 }
      };
      
      let nextGeneration = {pos1: universe.pos1};
      
      assert.deepEqual(nextGeneration, {pos1: {x: 1, y: 1}});
    });
  
    it('of three diagonal2 cells contains middle cell', function() {
      let universe = {
        pos1: { x:0, y:0 },
        pos2: { x:1, y:1 },
        pos3: { x:2, y:2 }
      };
      
      let nextGeneration = {pos2: universe.pos2};
      
      assert.deepEqual(nextGeneration, {pos2: {x: 1, y: 1}});
    });
  });
});