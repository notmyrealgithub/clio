(function(window) {
  'use strict';

  var AClass = function() {
    this._originalMethods = {};
  };
  
  AClass.prototype.talk = function(speech) {
    //console.log(speech);
    return speech;
  };

  /**
   * Adds a pre-hook function call to a given method.
   *
   * @param {string} method The name of the method to be pre-hooked
   * @param {function} preHook The pre-hook function that is fired before the method 
   *
   * @example
   * AClass.before("talk", function(){ console.log("*cough*") })
   */
  AClass.prototype.before = function(method, preHook) {
    if (typeof this._originalMethods[method] === "undefined") {
      this._originalMethods[method] = this[method];
    }
    this[method] = function() {
      preHook();
      var args = Array.prototype.slice.call(arguments);
      this._originalMethods[method].apply(this, args);
    };
  };

  window.clio = window.clio || {};
  window.clio.AClass = AClass; 

})(window);
