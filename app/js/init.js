Locator.init(function cityReceived(location, locationErr){
    if(typeof locationErr === 'undefined'){
        pageStyling(location);
        Ajax.getJSON('app/data/fiefs.json', function jsonLoaded(data, dataErr) {
            if(typeof dataErr === 'undefined') {
                var userData = data[location.address.postcode.substr(0, 2)];
                console.log(userData);
                document.querySelector('.data').innerHTML = JSON.stringify(userData);
            } else {
                console.log(dataErr);
            }
        });
    }
    else{
        console.log(locationErr);
    }
});


function pageStyling(data) {
    document.querySelector('.geolocation').classList.remove('hidden');
    document.querySelector('.welcomeFlashMessage').classList.add('hidden');
    document.querySelector('.city').innerHTML = data.address.town;
    document.querySelector('.geolocation').value = data.address.town+" - "+data.address.postcode.substr(0, 2);
}
