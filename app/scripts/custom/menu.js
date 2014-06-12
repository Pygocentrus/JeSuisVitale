// MENU
(function() {
var h2         = document.querySelector('.menu h2'),
    list       = document.querySelectorAll('.menu ul li'),
    href       = document.querySelectorAll('.menu a'),
    credits    = document.querySelector('#credits'),
    mapWrapper = document.querySelector('#map-wrapper');

function menu(e) {
    e.stopPropagation();
    if (h2.className == 'cross') {
        h2.className = '';
    } else {
        h2.className = 'cross';
    }
    // LI VISIBLE
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

if (typeof h2 !== 'undefined'){
    h2.addEventListener('click', function(e){
        if(mapWrapper.className == 'visible'){
            mapWrapper.className = '';
            h2.className = '';
        } else if (credits.className == 'visible') {
            credits.className = '';
            h2.className = '';
        } else {
            menu(e);
        }
    });
}

// MAPS & CRÉDITS
for (var i = 0, size = href.length ; i < size; i++) {
    href[i].addEventListener('click', function() {
        if (this.getAttribute('href') == "#mapWrapper") {
            Array.prototype.forEach.call(list, function(li, i) {
                var timer = 40 * i;
                setTimeout(function() {
                    if (li.className == 'visible') {
                        li.className = '';
                    }
                }, timer);
            });
            mapWrapper.className = 'visible';
            mapWrapper.scrollIntoView(true);
        }
        if (this.getAttribute('href') == "#credits") {
            Array.prototype.forEach.call(list, function(li, i) {
                var timer = 40 * i;
                setTimeout(function() {
                    if (li.className == 'visible') {
                        li.className = '';
                    }
                }, timer);
            });
            credits.className = 'visible';
            credits.scrollIntoView(true);
        }
    }, false);
};

}).call(this);
