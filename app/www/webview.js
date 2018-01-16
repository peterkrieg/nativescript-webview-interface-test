window.onload = function() {
  var oWebViewInterface = window.nsWebViewInterface;
  oWebViewInterface.emit('webviewLoaded');
}

// test function, calling from native with iOS breaks with error:
// "this.webView.ios.stringByEvaluatingJavaScriptFromString is not a function"
window.doSomething = function() {
  console.log('doing something!');
}


