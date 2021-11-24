'use strict';

function Router(routes) {
    try {
        if(!routes) {
            throw 'error: routes param is mandatory';
        }
        this.constructor(routes);
        this.init();
    } catch(e) {
        console.error(e);
    }
}

Router.prototype = {
    routes: undefined, 
    rootElem: undefined,
    constructor: function(routes) {
        this.routes = routes;
        this.rootElem = document.getElementById('root');
    },
    init: function() {
        var r = this.routes;
        (function(scope, r) {
            window.addEventListener('hashchange', function (e) {
                scope.hasChanged(scope, r);
            });
        })(this, r);
        this.hasChanged(this, r);
    },
    hasChanged: function(scope, r) {
        console.log('hasChanged' + window.location.hash);
        if(window.location.hash.length > 0) {
            console.log(r);
            for (var i = 0, length = r.length; i < length; i++) {
                console.log(window.location.hash.substr(1));
                var route = r[i];
                if(route.isActiveRoute(window.location.hash.substr(1))) {
                    console.log('1');
                    scope.goToRoute(route.htmlName);
                }
            }
        } else {
            console.log('else');
            for (var i = 0, length = r.length; i < length; i++) {
                var route =  r[i];
                if(route.defaultRoute) {
                    console.log('2');
                    scope.goToRoute(route.htmlName);
                }
            }
        }
    },
    goToRoute: function(htmlName) {
        console.log('goToRoute');
        (function(scope) {
            console.log('request');
            var url = 'pages/' + htmlName, 
                xhttp = new XMLHttpRequest();
                console.log(url);
            xhttp.onreadystatechange = function() {
                console.log(htmlName);
                if(this.readyState === 4 && this.status === 200) {
                    scope.rootElem.innerHTML = this.responceText;
                }
            };
            xhttp.open('GET', url, true);
            xhttp.send();
        })(this);
    }
};