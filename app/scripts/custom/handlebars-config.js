var handlebarsConfig = {
	insertDatas: function () {
		// datas of the note : level-1
		var element = document.getElementById('level-1');
		var source = element.innerHTML;
		var template = Handlebars.compile(source);
		var context = {
			aqualite: ($scope.city.attributes.aqualite / 10).toFixed(2)
		}
		var html = template(context);
		element.innerHTML = html;

		// datas of the goutte : level-2
		var element = document.getElementById('level-2');
		var source = element.innerHTML;
		var template = Handlebars.compile(source);
		var context = {
			ammonium: $scope.city.attributes.ammonium, 
			chlore: $scope.city.attributes.chlore, 
			ph: $scope.city.attributes.ph, 
			conductivite: $scope.city.attributes.conductivite, 
			nitrates: $scope.city.attributes.nitrates
		}
		var html = template(context);
		element.innerHTML = html;
	}
}