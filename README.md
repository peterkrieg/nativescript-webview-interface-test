This repo demonstrates an iOS bug for `nativescript-webview-interface` library.

**Steps to recreate:**

1.  clone repo
2.  `tns run ios`


Should see error `JS ERROR TypeError: this.webView.ios.stringByEvaluatingJavaScriptFromString is not a function.` Everything works fine for Android, however.
