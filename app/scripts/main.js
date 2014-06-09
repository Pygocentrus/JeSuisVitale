// Manages window height
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


// Grab the user's current location and sets the input with his city
Locator.init(function cityReceived(location, locationErr){
    if(typeof locationErr === 'undefined'){
        document.querySelector('.geolocation').value = location.address.town+" - "+location.address.postcode.substr(0, 2);
        Ajax.getJSON('data/fiefs.json', function jsonLoaded(data, dataErr) {
            if(typeof dataErr === 'undefined') {
                var userData = data[location.address.postcode.substr(0, 2)];
                console.log(userData);
            } else {
                console.log(dataErr);
            }
        });
    }
    else{
        console.log(locationErr);
    }
});
