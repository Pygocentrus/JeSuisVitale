// Manages window height
function customHeight(section) {
    var windowHeight = window.innerHeight + 'px';
    for (var i = 0, size = section.length; i < size; i++) {
        section[i].style.height =  windowHeight;
    };
}

// Window on resize event
window.onresize = function() {
    customHeight(section);
};

//Handles resize events
customHeight(section);
