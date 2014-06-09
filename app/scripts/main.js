/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            exports: 'Backbone'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        snap: '../bower_components/Snap.svg/dist/snap.svg-min',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        handlebars: '../bower_components/handlebars/handlebars',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap'
    }
});

require([
    'backbone', 'snap'
], function(backbone, snap) {
    Backbone.history.start();
    
    // MAP 
    // (function() {

    //     var path = document.querySelectorAll('path'); 
    //     var departements = new Array();

    //     for (var i = 0; i < 94; i++) {
    //         departements.push(path[i]);
    //     };

    //     for (var i = 0, size = departements.length; i < size; i++) {
    //         departements[i].addEventListener('mouseover', function() {
    //             this.style.fill = '#5095F9';
    //         }, false);
    //         departements[i].addEventListener('mouseout', function() {
    //             this.style.fill = '#EEEEEE';
    //         }, false);
    //     }; 

    //     console.log(departements);
    // }).call(this);

    // BLUR
    (function() {
        var content = document.querySelector('.blur-percentage');
        var duplicate = content.cloneNode(true);
        var contentBlurred = document.createElement('div');
        contentBlurred.className = 'content-blurred';
        contentBlurred.appendChild(duplicate);

        var blur = document.querySelector('#blur');
        blur.appendChild(contentBlurred);
    }).call(this);

    // MENU
    (function() {
    var h2 = document.querySelector('.menu h2');

    function menu(e) {
        e.stopPropagation();
        if (h2.className == 'cross') {
            h2.className = '';
        } else {
            h2.className = 'cross';
        }
        // LI VISIBLE 
        var list = document.querySelectorAll('.menu ul li');
        Array.prototype.forEach.call(list, function(li, i) {
            var timer = 40 * i;
            setTimeout(function() {
                if (li.className == 'visible') {
                    li.className = '';
                } else {
                    li.className = 'visible';
                }
            }, timer);
        });
    }
    
    if (typeof h2 !== 'undefined') h2.addEventListener('click', menu);

    }).call(this);

    // WINDOW HEIGHT
    (function() {
        var section = document.querySelectorAll('.section-height');

        function customHeight(section) {
            var windowHeight = window.innerHeight + 'px';
            for (var i = 0, size = section.length; i < size; i++) {
                section[i].style.height =  windowHeight;
            };
        }

        window.onresize = function() {
            customHeight(section);
        };

        customHeight(section);
    }).call(this);
});
