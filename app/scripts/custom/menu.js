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

// MAPS & CRÉDITS
var href       = document.querySelectorAll('.menu a'),
    credits    = document.querySelector('#credits'),
    mapWrapper = document.querySelector('#map-wrapper');

for (var i = 0, size = href.length ; i < size; i++) {
    href[i].addEventListener('click', function() {
        if (this.getAttribute('href') == "#mapWrapper") {
            if (mapWrapper.className == 'visible') {
                mapWrapper.className = '';
                this.innerHTML = 'Carte';
            } else {
                mapWrapper.className = 'visible';
                credits.className = '';
                this.innerHTML = 'Home';
            }
        };
        if (this.getAttribute('href') == "#credits") {
            if (credits.className == 'visible') {
                credits.className = '';
                this.innerHTML = 'Crédits';
            } else {
                credits.className = 'visible';
                mapWrapper.className = '';
                this.innerHTML = 'Home';
            }
        };
    }, false);
};

}).call(this);
