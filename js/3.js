(function(window) {
  'use strict';

  /**
   * Adds a pre-hook function call to a given method.
   *
   * @param {string} method The name of the method to be pre-hooked
   * @param {function} preHook The pre-hook function that is fired before the method 
   *
   * @example
   * AClass.before("talk", function(){ console.log("*cough*") })
   */
  var findIt = function(grid) {
    for (var row = 0; row < grid.length; row++) {
      var currentRow = grid[row];
      for (var col = 0; col < currentRow.length; col++) {
        if (currentRow[col] === 1) {
          var mirroredCol = Math.abs(currentRow.length - 1 - col);
          return [row, mirroredCol];
        }
      }
    }
    return [];
  };

  window.clio = window.clio || {};
  window.clio.findIt = findIt;

})(window);