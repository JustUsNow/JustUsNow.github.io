'use strict';

function Route(name, html, defaultRoute) {
    try {
        if (!name || !html) {
        throw 'error: name and html parameters are mandatories';
    }
    this.constructor(name, html, defaultRoute);
    } catch(e) {
        console.error(e);
    }
}

Route.prototype = {
    name: undefined,
    htmlName: undefined,
    defaultRoute: undefined,
    constructor: function(name, htmlName, defaultRoute) {
        this.name = name;
        this.htmlName = htmlName;
        this.defaultRoute = defaultRoute;
    },
    isActiveRoute: function(hashedPath) {
        return hashedPath.replace('#', '') === this.name;
    }
}