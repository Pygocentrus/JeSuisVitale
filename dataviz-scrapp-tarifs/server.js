var express = require('express');
var fs = require('fs');
var http = require('http');
var Q = require('q');
var app = express();
var request = require('request');

// FULL PATH : path: '/get-reseau-eau.php?zipCodeOrCity=18000&radius=100&commune_id='

app.get('/', function(req, res) {
	//Getting all the french zip codes
	fs.readFile('villes.json', 'utf-8', function(err, data) {
		if (!err) {
			var villes = JSON.parse(data);
			var zipCode, options, str = '', promises = new Array();

			console.log(villes.length+' cities to check');
			console.log('START Grabbing data...');

			var promises = Q();
			//Searching data for each corresponding city
			for (var i = 0, size = villes.length; i < size; i++) {
				promises = promises.then(grabRow(villes[i], i));
			}
			promises.then(function(status){
				console.log('All done !');
			});
		} else {
			console.log('Err opening villes.json');
		}
	});
	res.send('Work in progress...');
});

//Search for a city, then writes it to the appropriate file (eau.json)
function grabRow(ville, index){
	return function(status){
		var codeCommune = Number(ville.INSEE);
		// codeCommune = 35004;
		// console.log(codeCommune);
		var str = '';
		var waterData = '';
		// var options = {
		// 	host: 'maps.quechoisir.org',
		// 	path: '/get-reseau-eau.php?zipCodeOrCity='+zipCode+'&radius=1'
		// };
		var deferred = Q.defer();

		// console.log('-City #'+(index+1)+': ' + ville.Commune + ' (' + zipCode + ')');

		request.post('http://www.tarifdeleau.fr/actions/get-informations-by-commune.php', {form:{codeCommune:codeCommune}}, function (err, httpResponse, body) {
			if (err) {
				// console.log(err)
				deferred.reject(err);
			}

			// console.log('body : ', body);
			str += body;
			var received = JSON.parse(str);
			// console.log('  --> Grabbing data');
			communeData = fs.readFileSync('eau.json', 'utf-8');
			communeData = JSON.parse(communeData);
			communeData.push(received);
			//Writes back the final file's content according to the previous results
			fs.writeFileSync('eau.json', JSON.stringify(communeData), 'utf-8');
			// console.log('  --> Data saved');
			deferred.resolve(200);

		})	
		return deferred.promise;
	// 	//Launches the request
	// 	http.request(options, function(response) {
	// 		response.on('data', function dataReceived(chunk) {
	// 			str += chunk;
	// 		});
	// 		response.on('end', function requestEnded() {
	// 			var received = JSON.parse(str);
	// 			if(received.data){
	// 				console.log('  --> Grabbing data');
	// 				waterData = fs.readFileSync('eau.json', 'utf-8');
	// 				waterData = JSON.parse(waterData);
	// 				waterData.push(received);
	// 				//Writes back the final file's content according to the previous results
	// 				fs.writeFileSync('eau.json', JSON.stringify(waterData), 'utf-8');
	// 				console.log('  --> Data saved');
	// 			}
	// 			deferred.resolve(200);
	// 		});
	// 	}).end();
	// 	return deferred.promise;
	}
}

//Launches the server
var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});