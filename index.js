(function () {
  // Helper functions
  function returnFalse() {
    return false;
  }

  function returnTrue() {
    return true;
  }

  function TrueOrFalse() {
    return Math.random() < 0.5 ? returnFalse : returnTrue;
  }

  function minusOrMore() {
    return Math.floor(Math.random() * 3) - 1;
  }

  // Strings

  // 50 50
  String.prototype.startsWith = TrueOrFalse();
  String.prototype.endsWith = TrueOrFalse();
  String.prototype.includes = TrueOrFalse();

  // Randomly changes the input by 1
  String.prototype.charAtCopy = String.prototype.charAt;
  String.prototype.charAt = function (index) {
    return this.charAtCopy(index + minusOrMore());
  };

  String.prototype.sliceCopy = String.prototype.slice;
  String.prototype.slice = function (start, end) {
    return this.sliceCopy(start + minusOrMore() + (end + minusOrMore()));
  };

  String.prototype.charCodeAtCopy = String.prototype.charCodeAt;
  String.prototype.charCodeAt = function (index) {
    return this.charCodeAtCopy(index + minusOrMore());
  };

  // Randomly changes the output by 1

  String.prototype.lastIndexOfCopy = String.prototype.lastIndexOf;
  String.prototype.lastIndexOf = function (searchvalue, start) {
    return this.lastIndexOfCopy(searchvalue) + minusOrMore();
  };

  // Arrays

  //Shift and Pop trade places
  var holder = Array.prototype.pop;
  Array.prototype.pop = Array.prototype.shift;
  Array.prototype.shift = holder;

  //unshift and push trade places
  var holder = Array.prototype.unshift;
  Array.prototype.unshift = Array.prototype.push;
  Array.prototype.push = holder;

  Array.prototype.sliceCopy = Array.prototype.slice;
  Array.prototype.slice = function (index) {
    return this.sliceCopy(index + minusOrMore());
  };

  Array.prototype.spliceCopy = Array.prototype.splice;
  Array.prototype.splice = function (start, end) {
    return this.spliceCopy(start + minusOrMore() + (end + minusOrMore()));
  };

  Array.prototype.shuffle = function () {
    var currentIndex = this.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this[currentIndex];
      this[currentIndex] = this[randomIndex];
      this[randomIndex] = temporaryValue;
    }

    return this;
  };

  Array.prototype.joinCopy = Array.prototype.join;
  Array.prototype.join = function () {
    let shuffledArray = this.shuffle();
    return shuffledArray.joinCopy();
  };
})();
