var handlebarsConfig = {
	insertDatas: function () {
		var source   = document.getElementById('datas-composition').innerHTML;
		var template = Handlebars.compile(source);
		var context = {
			ammonium: $scope.city.attributes.ammonium, 
			chlore: $scope.city.attributes.chlore, 
			ph: $scope.city.attributes.ph, 
			conductivite: $scope.city.attributes.conductivite, 
			nitrates: $scope.city.attributes.nitrates
		}
		var html = template(context);
		document.getElementById('datas-composition').innerHTML = html;
	}
}