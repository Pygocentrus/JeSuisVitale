var City = Backbone.Model.extend({

    defaults: {
        "id": 0,
        "departement":"Seine-Saint-Denis",
        "prefecture":"Bobigny",
        "population":47224,
        "ammonium":0.05,
        "chlore":0.35,
        "ph":7.8,
        "conductivite":604,
        "nitrates":37.5,
        "temperature":"15,7",
        "noteAmmonium":10,
        "noteChlore":12,
        "noteConductivite":19.87,
        "noteNitrates":5,
        "notePh":19.87,
        "aqualite":66.74
    },

    toString: function(){
        return this.get('departement')+' - '+this.get('id');
    }

});
