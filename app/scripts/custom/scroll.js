// STOPS SCROLL

var keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];

//Launches everything
toggleScroll();

/**
 * Erases every event's action
 * @param  {Object} e  The event
 * @return {NULL}      None
 */
function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}


/**
 * Handles keydown event
 * @param  {Object} e  The event
 * @return {NULL}      None
 */
function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

/**
 * Handles mousewheel event
 * @param  {Object} e  The event
 * @return {NULL}      None
 */
function wheel(e) {
  preventDefault(e);
}

/**
 * Enables / Disables scrolling && keydown events
 * @return {[type]} [description]
 */
function toggleScroll() {
    if (window.removeEventListener && window.addEventListener) {
        if(window.onmousewheel !== null || document.onkeydown !== null) {
            window.removeEventListener('DOMMouseScroll', wheel, false);
            window.onmousewheel = document.onmousewheel = document.onkeydown = null;
        }else{
            window.addEventListener('DOMMouseScroll', wheel, false);
            window.onmousewheel = document.onmousewheel = wheel;
            document.onkeydown = keydown;
        }
    }
}

// Smooth scroll
function animate(elem,style,unit,from,to,time,prop) {
    if( !elem) return;
    var start = new Date().getTime(),
        timer = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/time);
            if (prop) {
                elem[style] = (from+step*(to-from))+unit;
            } else {
                elem.style[style] = (from+step*(to-from))+unit;
            }
            if( step == 1) clearInterval(timer);
        },25);
    elem.style[style] = from+unit;
}
