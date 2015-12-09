import assert from 'assert';

describe('test setup works?', function() {
  it('i hope', function() {
    assert.equal(1, 1);
  });
});

class Universe {
  static withPositions(positions) {
    const universe = new Universe();
    universe.positions = positions;
    return universe;
  }
  indexOf({x, y}) {
    return this.positions
      .map((position, index) => position.x == x && position.y == y ? index : -1)
      .filter(index => index > -1)
      [0];
  }
}
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
      let universe = Universe.withPositions([
        { x:51, y:51 }, // TODO the position is duplicated 3 times, extract
        { x:50, y:50 },
        { x:52, y:52 }
      ]);
      let surviverIndex = universe.indexOf({x: 51, y: 51});
      let nextGeneration = newUniverseWithOneCellFrom(universe, surviverIndex);
      
      assert.deepEqual(nextGeneration, {positions: [{x: 51, y: 51}]});
    });
  
    it('of three diagonal cells (in different order) contains middle cell', function() {
      let universe = Universe.withPositions([
        { x:0, y:0 },
        { x:1, y:1 },
        { x:2, y:2 }
      ]);

      let surviverIndex = universe.indexOf({x: 1, y: 1});

      // TODO we need to determine why (1.1) from the universe somehow. this is the
      // rule for survival. then we can extract test 2+4 into new tick method
      // and combine with existing one. maybe <- ;-)
      let nextGeneration = newUniverseWithOneCellFrom(universe, surviverIndex);
      
      assert.deepEqual(nextGeneration, {positions: [{x: 1, y: 1}]});
    });
 
  });
});