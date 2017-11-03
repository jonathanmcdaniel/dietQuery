//
// dietQuery Private Functions
// ===================================================================
var httpLoad = function (url, dietQueryInstance) {
  // Credit to Joan and Félix Gagnon-Grenier on StackOverflow at question answer:
  // https://stackoverflow.com/a/4033310
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      dietQueryInstance.html(xmlHttp.responseText)
    }
  }
  xmlHttp.open('GET', url, true)
  xmlHttp.send(null)
}

// dietQuery Public Functions
// ===================================================================
var dQ = {
  nodeList: [],
  constructor: function (selector) {
    var retVal
    try {
      retVal = document.querySelectorAll(selector)
    } catch (e) {
      retVal = []
    } finally {
      this.nodeList = retVal
    }
    return this
  },
  css: function (property, value) {
    for (var i = 0; i < this.nodeList.length; i++) {
      this.nodeList[i].style[property] = value
    }
    return this
  },
  html: function (value) {
    for (var i = 0; i < this.nodeList.length; i++) {
      this.nodeList[i].innerHTML = value
    }
    return this
  },
  on: function (event, callback) {
    for (var i = 0; i < this.nodeList.length; i++) {
      this.nodeList[i].addEventListener(event, callback)
    }
    return this
  },
  attribute: function (property, value) {
    for (var i = 0; i < this.nodeList.length; i++) {
      this.nodeList[i][property] = value
    }
    return this
  },
  load: function (url) {
    httpLoad(url, this)
    return this
  }
}

// dietQuery Interface
// ===================================================================
function _$ (selector) { // eslint-disable-line no-unused-vars
  return dQ.constructor(selector)
}
