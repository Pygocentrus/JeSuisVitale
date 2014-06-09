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
                var currentCity;
                //Setting the app's Scope data
                for(var c in data){
                    currentCity = new City({
                        id: c,
                        departement : data[c].departement,
                        prefecture : data[c].prefecture,
                        population : data[c].population,
                        ammonium : data[c].ammonium,
                        chlore : data[c].chlore,
                        ph : data[c].ph,
                        conductivite : data[c].conductivite,
                        nitrates : data[c].nitrate,
                        noteAmmonium : data[c].noteAmmonium,
                        noteChlore : data[c].noteChlore,
                        noteConductivite : data[c].noteConductivite,
                        noteNitrates : data[c].noteNitrates,
                        notePh : data[c].notePh,
                        aqualite : data[c].aqualite
                    });
                    //Checks if the current county equals the user's and set the Scope
                    if(currentCity.get('id') === location.address.postcode.substr(0, 2)){
                        $scope.city = currentCity;
                    }
                    $scope.cities.add(currentCity);
                }
            } else {
                console.log(dataErr);
            }
        });
    }
    else{
        console.log(err);
    }
});
