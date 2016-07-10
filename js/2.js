(function(window) {
  'use strict';

  var myHash = {
    'a': 1,
    'b': 2,
    'c': 3
  };

  /**
   * Applies the given mapping function on a hash
   *
   * @constructor
   * @param {function} mapFunction The hash transform function
   */
  var map = function(mapFunction) {
    var hash = this;
    var mappedHash = [];
    for (var key in hash) {
      mappedHash = mapFunction.call(undefined, key, hash[key]);
      myHash[mappedHash[0]] = mappedHash[1];
      delete myHash[key];
    }
  };

  /**
   * Defines map property on myHash.
   * enumerable: false ensures this property does not show during iteration.
   */
  Object.defineProperty(myHash, 'map', {
    enumerable: false,
    value: map
  });


  window.clio = window.clio || {};
  window.clio.myHash = myHash;

})(window);
