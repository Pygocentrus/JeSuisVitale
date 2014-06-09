var City = Backbone.Model.extend({

    defaults: {
        "id": 75,
        "departement": "Paris",
        "prefecture": "Paris",
        "population": 2249975,
        "ammonium": "<0,05 mg/L",
        "chlore": "0,14 mg/LCl2",
        "ph": "7,50 unitépH",
        "conductivite": "604 µS/cm",
        "nitrate": "37,5 mg/L",
        "temperature": "15,1 °C"
    },

    toString: function(){
        return this.get('departement')+' - '+this.get('id');
    }

});
