var Locator = {};

/**
 * Initialize the Locator Object, which helps
 * you having access to the nearby location address
 * according to the user current location
 * @param  {Function} callback  The function to call at the end
 * @return {NULL}               None
 */
Locator.init = function(callback) {
    var toDo = Q();
    toDo.then(this.getLocation)
        .then(this.getData)
        .then(function dataGrabed(data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        })
        .catch(function(err) {
            if (typeof callback === 'function') {
                callback(null, err);
            }
        });
};

/**
 * Grabs user current location
 * @return {Object} Error || Coordinates
 */
Locator.getLocation = function() {
    var deferred = Q.defer();
    Location.init(function locationAsked(coordinates, err) {
        if (typeof coordinates.coords !== 'undefined') {
            deferred.resolve(coordinates.coords);
        } else {
            deferred.reject(Location.getError());
        }
    });
    Location.askLocation();
    return deferred.promise;
};

/**
 * Grabs user closest city
 * @param  {Object} coords The user's coordinates
 * @return {Object}        The closest city's info
 */
Locator.getData = function(coords) {
    var deferred = Q.defer();
    var url = 'http://nominatim.openstreetmap.org/reverse?format=json&lat=' + coords.latitude + '&lon=' + coords.longitude + '&adress_details=1';
    Ajax.get(url, {}, function dataReceived(res) {
        deferred.resolve(JSON.parse(res));
    });
    return deferred.promise;
};
