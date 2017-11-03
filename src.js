


// liteQuery Private Functions
// ===================================================================
var httpLoad = function(url, liteQueryInstance) {
  // Credit to Joan and Félix Gagnon-Grenier on StackOverflow at question answer:
  // https://stackoverflow.com/a/4033310
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
          liteQueryInstance.html(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}


// liteQuery Public Functions
// ===================================================================
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
  },
  on(event, callback){
    for (var i = 0; i < this.nodeList.length; i++) {
      this.nodeList[i].addEventListener(event, callback)
    }
    return this;
  },
  attribute(property,value){
    for (var i = 0; i < this.nodeList.length; i++) {
      this.nodeList[i][property] = value;
    }
    return this;
  },
  load(url){
    httpLoad(url, this);
    return this;
  }
}

// liteQuery Interface
// ===================================================================
function _$(selector){
  return q.constructor(selector);
}
