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

// MAPS
(function() {
var href   = document.querySelectorAll('.menu a'),
mapWrapper = document.querySelector('#map-wrapper');

for (var i = 0, size = href.length ; i < size; i++) {
    href[i].addEventListener('click', function() {
        if (this.getAttribute('href') == "#mapWrapper") {
            if (mapWrapper.className == 'visible') {
                mapWrapper.className = '';
                this.innerHTML = 'Carte';
            } else {
                mapWrapper.className = 'visible';
                this.innerHTML = 'Home';
            }
        };
    }, false);
};
}).call(this);
