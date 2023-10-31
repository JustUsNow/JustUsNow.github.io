var app = (function () {
    
    var contentId = 1;

    var config = {};

    var ui = {
        $body: $('body'),
        $menu: $('#menu'),
        $pageTitle: $('#pageTitle'),
        $content: $('#content-' + contentId)
    };

    function _loadPage(page) {
 
        var url = 'pages/' + page + '.html',
            pageTitle = config.pages[page].title,
            menu = config.pages[page].menu;
    
        $.get(url, function(html) {
            document.title = pageTitle + ' | ' + config.siteTitle;
            ui.$menu.find('a').removeClass('active');
            ui.$menu.find('a[data-menu=\'' + menu + '\']').addClass('active');
            if (menu.substr(0, 4) == 'game') {
                ui.$menu.find('a[data-menu=\'game\']').addClass('active');
            }
            ui.$pageTitle.html(pageTitle);
            ui.$content.html(html);
            contentId = (contentId % 2) + 1;
        });
        if (contentId == 1) {
            ui.$content.fadeOut('fast', function() {
                $('#content-1').fadeIn('fast', function() {})
            })
        } else {
            ui.$content.fadeOut('fast', function() {
                $('#content-2').fadeIn('fast', function() {})
            })
        }
        console.log(contentId)
    }

    function _popState(e) {
        var page = (e.state && e.state.page) || config.mainPage;
        _loadPage(page);
    }
    

    function _bindHandlers() {
        ui.$body.on('click', 'a[data-link="ajax"]', _navigate);
        ui.$body.on('click', 'button[class=\'go-button\']', _navigate);
        window.onpopstate = _popState;
    }

    function _navigate(e) {
        e.stopPropagation();
        e.preventDefault();
    
        var page = $(e.target).attr('href');
    
        _loadPage(page);
        history.pushState({page: page}, '', page);
    }

    function _start() {
        var page = document.location.pathname.substr(1) || config.mainPage;
        _loadPage(page);

        _bindHandlers();
    }

    function init() {
        $.getJSON('/data/config.json', function(data) {
            config = data;
            _start();
        })
    }

    return {
        init: init
    }
}) ();

$(document).ready(app.init);