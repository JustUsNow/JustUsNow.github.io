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
        if(window.location.hash.length > 0) {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if(route.isActiveRoute(window.location.hash.substr(1))) {
                    scope.goToRoute(route.htmlName);
                }
            }
            for (var i = 0, length = r.length; i < length; i++) {
                var route =  r[i];
                if(route.defaultRoute) {
                    scope.goToRoute(route.htmlName);
                }
            }
        }
    },
    goToRoute: function(htmlName) {
        (function(scope) {
            var url = 'pages/' + htmlName, 
                xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                console.log(this.readyState, ' ', this.status);
                if(this.readyState === 4 && this.status === 200) {
                    scope.rootElem.innerHTML = this.responceText;
                }
            };
            xhttp.open('GET', url, true);
            xhttp.send();
        })(this);
    }
};