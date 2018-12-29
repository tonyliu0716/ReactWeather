var React = require('react');

// how to create links in Nav bar
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

    // user type something in the input box
    onSearch: function(e) {
        e.preventDefault();

        // get city name
        var city = this.refs.city.value;
        var encodedLocation = encodeURIComponent(city);

        if(city.length > 0) {
            // clean the input field
            this.refs.city.value = '';

            // remove the location URL
            window.location.hash = '#/?location=' + encodedLocation;
        }
        
    },
    render: function () {
        return (
            <div clasName="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Weather APP
                        </li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" ref="city" placeholder="Search Weather by City" />
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});


module.exports = Nav;