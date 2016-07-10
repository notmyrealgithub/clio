(function(window) {

  var theTruth = function(){};

  /**
   * Proves 2 + 2 = 5
   *
   * Uses a truth filter (!!~~!!{}+~~) to destroy untruth.
   * It works like a spell cast by a master wizard...scientist.
   *
   * ( ＾⌒＾) [untruth]
   *
   * (∩｀-´)⊃━☆ﾟ !!~~!!{}+~~ [untruth]
   *
   * ( ＾◡＾)っ [truth]
   * 
   */
  theTruth.proof = function(){
    return !!~~!!{}+~~2+2;
  };

  window.clio = window.clio || {};
  window.clio.theTruth = theTruth; 

})(window);