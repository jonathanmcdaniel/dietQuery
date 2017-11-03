
var q = {
  nodeList:[],

  constructor(selector){
    var retVal;
    try {
      retVal = document.querySelectorAll(selector);
    } catch (e) {
      console.warn("No selectors found");
    } finally {
      this.nodeList = retVal;
      return this;
    }
  },

  css(property, value) {
    for (var i = 0; i < this.nodeList.length; i++) {
      this.nodeList[i].style[property] = value;
    }
    return this;
  },

  html(value) {
    for (var i = 0; i < this.nodeList.length; i++) {
      this.nodeList[i].innerHTML = value;
    }
    return this;
  }
}

function _$(selector){
  return q.constructor(selector);
}
