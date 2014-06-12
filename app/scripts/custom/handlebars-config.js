var handlebarsConfig = {

    templates: {
        templateLvl1: document.getElementById('level-1').innerHTML,
        templateLvl2: document.getElementById('level-2').innerHTML
    },

	insertDatas: function () {
		// datas of the note : level-1
		var template = Handlebars.compile(this.templates.templateLvl1);
		var context = {
			prefecture: $scope.city.attributes.prefecture,
			aqualite: ($scope.city.attributes.aqualite / 10).toFixed(1)
		}
		var html = template(context);
		document.getElementById('level-1').innerHTML = html;

		// datas of the goutte : level-2
		template = Handlebars.compile(this.templates.templateLvl2);
		var context = {
			ammonium: $scope.city.attributes.ammonium,
			chlore: $scope.city.attributes.chlore,
			ph: $scope.city.attributes.ph,
			conductivite: $scope.city.attributes.conductivite,
			nitrates: $scope.city.attributes.nitrates
		}
		var html = template(context);
		document.getElementById('level-2').innerHTML = html;
	}
}
