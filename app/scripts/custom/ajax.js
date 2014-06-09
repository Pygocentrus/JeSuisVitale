var Ajax = {};

/**
 * Creates an XmlHttpRequest according to the
 * current browser
 * @return {XMLHttpRequest} The request object
 */
Ajax.init = function() {
    if (typeof XMLHttpRequest !== 'undefined') {
        return new XMLHttpRequest();
    }
    var versions = [
        "MSXML2.XmlHttp.5.0",
        "MSXML2.XmlHttp.4.0",
        "MSXML2.XmlHttp.3.0",
        "MSXML2.XmlHttp.2.0",
        "Microsoft.XmlHttp"
    ];

    var xhr;
    for (var i = 0; i < versions.length; i++) {
        try {
            xhr = new ActiveXObject(versions[i]);
            break;
        } catch (e) {}
    }
    return xhr;
};

/**
 * Sends a request and runs the user's callback
 * @param  {String}   url       The wanted resource URL
 * @param  {Function} callback  The user's callback
 * @param  {String}   method    The method - POST/GET/PUT...
 * @param  {Object}   data      The data to send within the request
 * @param  {String}   sync      The sync flag
 * @return {NONE}               Nothing to return, only runs callback
 */
Ajax.send = function(url, callback, method, data, sync) {
    var x = Ajax.init();
    x.open(method, url, sync);
    x.onreadystatechange = function() {
        if (x.readyState == 4) {
            callback(x.responseText)
        }
    };
    if (method == 'POST') {
        x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    x.send(data);
};

/**
 * Sends a GET request to the appropriate ressource
 * @param  {String}   url       The wanted resource URL
 * @param  {Function} callback  The user's callback
 * @param  {Object}   data      The data to send within the request
 * @param  {String}   sync      The sync flag
 */
Ajax.get = function(url, data, callback, sync) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    Ajax.send(url + '?' + query.join('&'), callback, 'GET', null, sync)
};

/**
 * Sends a POST request to the appropriate ressource
 * @param  {String}   url       The wanted resource URL
 * @param  {Function} callback  The user's callback
 * @param  {Object}   data      The data to send within the request
 * @param  {String}   sync      The sync flag
 */
Ajax.post = function(url, data, callback, sync) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    Ajax.send(url, callback, 'POST', query.join('&'), sync)
};

/**
 * Sends a request in order to grab a JSON file
 * @param  {String}   path      The path to the appropriate resource
 * @param  {Function} callback  The callback function to run afterward
 * @return {NONE}               Nothing to return, only runs callback
 */
Ajax.getJSON = function(path, callback) {
    var x = Ajax.init();
    x.onreadystatechange = function() {
        if (x.readyState === 4) {
            if (x.status === 200) {
                if (callback) {
                    callback(JSON.parse(x.responseText)[0]);
                }
            } else {
                if (callback) {
                    callback(null, x);
                }
            }
        }
    };
    x.open("GET", path, true);
    x.send();
};
