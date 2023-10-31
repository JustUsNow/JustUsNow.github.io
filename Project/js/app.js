'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),
            new Route('about', 'about.html'),
            new Route('intro', 'intro.html'),
            new Route('matrix', 'matrix.html'),
            new Route('behaviours', 'behaviours.html'),
            new Route('burn', 'burn.html'),
            new Route('conclusion', 'conclusion.html')
        ]);
    }
    init();
}());