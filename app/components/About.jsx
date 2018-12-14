var React = require('react');

var About = React.createClass({
    render: function() {
        return (
            <div>
                <h3>About</h3>
                <p>Welcome to the about page.</p>
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