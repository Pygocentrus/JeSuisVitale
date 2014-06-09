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
