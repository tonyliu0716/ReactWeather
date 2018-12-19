// before that need to run : npm install axios --save
var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=7a89a0b3f307a97cfb724e1029dbcee8&units=imperial';

// api key
//APPID=7a89a0b3f307a97cfb724e1029dbcee8

module.exports = {
    
    getTemp: function(location) {
        // format the URI
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        
        // javascript Promise
        return axios.get(requestUrl).then(function(res) {
            
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
                
            } else {
                return res.data.main.temp;
            }
            
        }, function(res) {
            throw new Error('Unable to fetch weather for that location');
        });
    }
    
}