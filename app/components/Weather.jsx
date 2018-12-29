var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function() {
      return {
          isLoading: false
      }  
    },
    handleSearch: function(location) {

        var that = this;
        
        // before we start searching the weather, clear the previous search history
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });
        
        // use API to get data
        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(e) {
            that.setState({
                isLoading: false,
                errorMessage: e.message          
            });
            
        });
    },

    componentDidMount: function() {
        // pull out the location from the URL
        var location = this.props.location.query.location;

        // trigger the search
        if(location && location.length > 0) {
            this.handleSearch(location);
            // after search clean the location value
            window.location.hash = '#/';
        }
    },

    componentWillReceiveProps: function(newProps) {
        // pull out the location from the URL
        var location = newProps.location.query.location;

        // trigger the search
        if(location && location.length > 0) {
            this.handleSearch(location);
            // after search clean the location value
            window.location.hash = '#/';
        }
    },
    
    render: function() {
        var {isLoading, temp, location, errorMessage} = this.state;
        
        function renderMessage() {
            
            if(isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>
            } else if(temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }
        
        function renderError() {
            if(typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }
        
        
        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>  
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
            
        );
    }
    
});

module.exports = Weather;