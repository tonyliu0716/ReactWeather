var React = require('react');

var About = React.createClass({
    render: function() {
        return (
            <div>
                <h1 className="text-center page-title">About</h1>
                <p>This is a weather application build on React.</p>
                <p>
                    Here are some of the tools I used:
                </p>
                <ul>
                    <li>
                        <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
                    </li>
                    <li>
                        <a href="http://openweathermap.org">Open Weahter Map</a> - I used Open Weather Map to search for weather data by city name.
                    </li>
                </ul>
            </div>
        );
    }
    
});


// stateless way 
//var About = function(props) {
//    return (
//        <h3>About Component</h3>
//    );
//}

module.exports = About;