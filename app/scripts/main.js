onStartStyle();

// Grab the user's current location and sets the input with his city
Locator.init(function cityReceived(location, err){
    if(typeof err === 'undefined'){
        onUpdateStyleGeolocation(location);
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
                        handlebarsConfig.insertDatas();
                        goutteSVGDrawer.drawGoutte();
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


/**
 * Start's style, before grabbing location
 * @return {NULL}  None
 */
function onStartStyle() {
    pGeolocation.style.backgroundImage = "";
    goDown.style.display = "none";
}


/**
 * Update style, after grabbing location
 * @return {NULL}  None
 */
function onUpdateStyleGeolocation(location) {
    pGeolocation.style.backgroundImage = "url('img/location.svg')";
    pGeolocation.style.backgroundSize = "30px 30px";
    pGeolocation.style.backgroundPosition = "";
    pGeolocation.style.lineHeight = "60px";
    pGeolocation.style.height = "60px";
    pGeolocation.style.width = "";
    pGeolocation.style.textTransform = "uppercase";
    pGeolocation.style.borderRadius = "30px";
    pGeolocation.style.padding = "0px";
    pGeolocation.innerHTML = location.address.town;
    goDown.style.display = "block";
}
