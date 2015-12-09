import assert from 'assert';

describe('test setup works?', function() {
  it('i hope', function() {
    assert.equal(1, 1);
  });
});

function tick() {
  return { positions:[] };
}
function newUniverseWithOneCellFrom(universe, position) {
  return {positions: [universe.positions[position]]};
}
describe('universe', function() {
  describe('next generation', function() {
    it('of empty universe is empty', function() {
      let universe = {
        positions: []
      };
      
      let nextGeneration = tick();
      
      assert.deepEqual(nextGeneration, { positions:[] });
    });
  
    it('of one cell is empty', function() {
      let universe = {
        positions: [{}]
      };
  
      let nextGeneration = tick();
      
      assert.deepEqual(nextGeneration, { positions:[] } );
    });
  
    // first step to think of universe as single cell because only one cell
    // survives and we place other cells accordingly.
    it('of three diagonal cells contains middle cell', function() {
      let universe = {
        positions: [
          { x:1, y:1 }, // TODO the position is duplicated many times, extract
          { x:0, y:0 },
          { x:2, y:2 }
        ]
      };

      let positionIndex = 0;
      let nextGeneration = newUniverseWithOneCellFrom(universe, positionIndex);
      
      assert.deepEqual(nextGeneration, {positions: [{x: 1, y: 1}]});
    });
  
    it('of three diagonal cells (in different order) contains middle cell', function() {
      let universe = {
        positions: [
          { x:0, y:0 },
          { x:1, y:1 },
          { x:2, y:2 }
        ]
      };
      let surviverIndex = 1;
      universe.positions[surviverIndex] = {x:1, y:1};

      // TODO we need to determine 1 from the universe somehow. this is the
      // rule for survival. then we can extract 49 and 66 into new tick method
      // and combine with existing one. maybe <- ;-)
      let positionIndex = surviverIndex;
      let nextGeneration = newUniverseWithOneCellFrom(universe, positionIndex);
      
      assert.deepEqual(nextGeneration, {positions: [{x: 1, y: 1}]});
    });
    
    it('of three diagonal cells (in another order) contains middle cell', function() {
      let universe = {
        positions: [
          { x:0, y:0 },
          { x:2, y:2 },
          { x:1, y:1 }
        ]
      };

      // TODO positionIndex is the index that has two neighbours
      let positionIndex = 2;
      let nextGeneration = newUniverseWithOneCellFrom(universe, positionIndex);
      
      assert.deepEqual(nextGeneration, {positions: [{x: 1, y: 1}]});
    });
  });
});