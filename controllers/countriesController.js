const fetch = require('node-fetch');

let countriesController = {
    list: function(req, res){
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(countries => {
                return res.render('countries', {countries});
            })
    },
    prov: async(req, res) => {

        let countries = await fetch('https://restcountries.eu/rest/v2/all').then(response => response.json())
        let provinces = await fetch('https://apis.datos.gob.ar/georef/api/provincias').then(response => response.json())

        return res.render('prov', {countries, provinces: provinces.provincias});
    }
       


}

module.exports = countriesController