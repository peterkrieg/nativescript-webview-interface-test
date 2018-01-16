import { Component, ViewChild, ElementRef } from '@angular/core';
import { WebView } from 'ui/web-view';

const webViewInterfaceModule = require('nativescript-webview-interface');

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    @ViewChild('webView') webView: ElementRef;

    ngOnInit() {
        this.setupWebViewInterface()
    }

    public setupWebViewInterface() {
        let oWebViewInterface;
        const webView: WebView = this.webView.nativeElement;
        oWebViewInterface = new webViewInterfaceModule.WebViewInterface(webView, '~/www/webview.html')

        oWebViewInterface.on('webviewLoaded', () => {
            console.log('webview loaded!');
            oWebViewInterface.callJSFunction('doSomething');
        })
    }

}
