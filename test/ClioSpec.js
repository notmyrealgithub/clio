describe("AClass", function() {
  'use strict'

  var theClass = new clio.AClass();

  it("talks", function() {
    var said = "hey";
    var heard = theClass.talk(said);
    expect(heard).toEqual(said);
  });

  it("adds a pre-hook to talk", function() {
    var said = "hey";
    var cough = jasmine.createSpy('cough');
    theClass.before("talk", cough);
    theClass.talk(said);
    expect(cough).toHaveBeenCalled();
  });

});

describe("myHash", function() {
  'use strict'

  it("fires mapping function ", function() {
    var expectedHash = {
      'A': 2,
      'B': 3,
      'C': 4
    };
    var transform = function(key, value) {
      return [key.toUpperCase(), value + 1];
    }
    clio.myHash.map(transform);
    expect(clio.myHash).toEqual(expectedHash);
  });

});

describe("findIt", function() {
  'use strict'

  var grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 1]
  ];

  it("finds 1", function() {
    var whereIsOne = clio.findIt(grid);
    expect(whereIsOne).toEqual([2, 0]);
  });

});

describe("theTruth", function() {
  'use strict'

  it("proves 2 + 2 = 5", function() {
    expect(clio.theTruth.proof()).toEqual(5);
  });

});
