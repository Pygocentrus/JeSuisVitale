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
Locator.init(function cityReceived(location, err){
    if(typeof err === 'undefined'){
        document.querySelector('.geolocation').value = location.address.town+" - "+location.address.postcode.substr(0, 2);
        Ajax.getJSON('data/fiefs.json', function jsonLoaded(data, dataErr) {
            if(typeof dataErr === 'undefined') {
                //received data
                var userData = data[location.address.postcode.substr(0, 2)];
                var ville = new City(userData);
                console.log(ville.toString());
                var villes = new Cities([]);
                villes.add(ville);
                console.log(villes);
            } else {
                console.log(dataErr);
            }
        });
    }
    else{
        console.log(err);
    }
});
