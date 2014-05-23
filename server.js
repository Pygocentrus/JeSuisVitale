var express = require('express');
var fs = require('fs');
var http = require('http');
var Q = require('q');
var app = express();


/**
 * First algorithm to get the data from the initial API
 * from maps.quechoisir.org
 */
app.get('/algo1', function(req, res) {
	//Getting all the french zip codes
	fs.readFile('ressources/villes.json', 'utf-8', function(err, data) {
		if (!err) {
			var villes = JSON.parse(data);
			var zipCode, options, str = '',
				promises = new Array();

			console.log(villes.length + ' cities to check');
			console.log('START Grabbing data...');

			var promises = Q();
			//Searching data for each corresponding city
			for (var i = 0, size = villes.length; i < size; i++) {
				promises = promises.then(grabRow(villes[i], i));
			}
			promises.then(function(status) {
				console.log('All done !');
			});
		} else {
			console.log('Err opening villes.json');
		}
	});
	res.send('Work in progress...');
});


/**
 * Second algorithm to get the data from the
 * orobnat.sante.gouv.fr website
 */
app.get('/', function(req, res) {
	var departments = JSON.parse(fs.readFileSync('ressources/departements.json', 'utf-8'));
	var regions = JSON.parse(fs.readFileSync('ressources/regions.json', 'utf-8'));
	var cities = JSON.parse(fs.readFileSync('ressources/villes.json', 'utf-8'));
	var associatedCities, associatedDpt, associatedDpts=new Array();

	//Get departments
	for (var i = 0, regSize = regions.length; i < regSize; i++) {
		associatedDpt = getAssociatedDpt(regions[i], departments);
		//Get this department's associated regions
		for (var j = 0, dptSize = associatedDpt.departments.length; j < dptSize; j++) {
			associatedCities = getAssociatedCities(associatedDpt.departments[j], cities);
			associatedDpt.departments[j].communes = associatedCities;
			//Get this region's associated cities
			// for (var k = 0, citSize = associatedCities.length; k < citSize; k++) {
			// 	//reseau = getNetwork(departments[i], regions[j], cities[k]);
			// }
		}
		associatedDpts.push(associatedDpt);
	}
	//console.log(associatedDpts);

	res.end('Processing...');
});


/**
 * Returns the french regions's associated departments
 * @param  {String} region       The wanted region
 * @param  {Object} departments  The associated departments
 * @return {Object}              The departments that are linked to the regions
 */
function getAssociatedDpt(region, departments) {
	var dpts = new Array();
	var regionsAndDpts = {
		region: region.region,
		id: region.id,
		departments: {}
	};
	for (var i = 0, size = departments.length; i < size; i++) {
		if (getNameDiff(region, departments[i]) === 0) {
			dpts.push({
				nom: departments[i].nom,
				numero: departments[i].numero
			});
		}
	}
	regionsAndDpts.departments = dpts;
	return regionsAndDpts;
}


/**
 * Returns the french department's associated cities
 * @param  {String} department   The wanted department
 * @param  {Object} cities       The associated cities
 * @return {Object}              The cities that are linked to the department
 */
function getAssociatedCities(department, cities) {
	var associatedCities = new Array();
	for(var i=0, size=cities.length; i<size; i++){
		if(department.nom.toLowerCase() === cities[i].Departement.toLowerCase()){
			associatedCities.push({
				commune: cities[i].Commune,
				codePostal: cities[i].Codepos,
				insee: cities[i].INSEE
			});
		}
	}
	return associatedCities;
}


/**
 * Returns the characters difference between two words,
 * here two departments
 * @param  {String} n1 The first string
 * @param  {String} n2 The second string
 * @return {Int}    The diff counter
 */
function getNameDiff(n1, n2) {
	var j = 0,
		cpt = 0;
	n1 = n1.region.toLowerCase();
	n2 = n2.region.toLowerCase();
	for (var i = 0, size = n1.length; i < size; i++) {
		if (n1.charAt(i) != n2.charAt(j)) {
			if (n2.charAt(i) == ' ' || n2.charAt(i) == '-') {
				j++;
			} else {
				cpt++;
			}
		} else {
			j++;
		}
	}
	return cpt;
}


/**
 * Search for a city, then writes it to the appropriate file (eau.json)
 * @param  {Object} ville  The wanted city
 * @param  {Int} index     The city's algorithm index (helper)
 * @return {Promise}       Promise
 */
function grabRow(ville, index) {
	return function(status) {
		var zipCode = ville.Codepos;
		var str = '';
		var waterData = '';
		var options = {
			host: 'maps.quechoisir.org',
			path: '/get-reseau-eau.php?zipCodeOrCity=' + zipCode + '&radius=1'
		};
		var deferred = Q.defer();

		console.log('-City #' + (index + 1) + ': ' + ville.Commune + ' (' + zipCode + ')');

		//Launches the request
		http.request(options, function(response) {
			response.on('data', function dataReceived(chunk) {
				str += chunk;
			});
			response.on('end', function requestEnded() {
				var received = JSON.parse(str);
				if (received.data) {
					console.log('  --> Grabbing data');
					waterData = fs.readFileSync('eau.json', 'utf-8');
					waterData = JSON.parse(waterData);
					waterData.push(received);
					//Writes back the final file's content according to the previous results
					fs.writeFileSync('eau.json', JSON.stringify(waterData), 'utf-8');
					console.log('  --> Data saved');
				}
				deferred.resolve(200);
			});
		}).end();
		return deferred.promise;
	}
}

//Launches the server
var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});