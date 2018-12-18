var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
    render: function() {
        return (
            <div>
                <h1 className="text-center">Examples</h1>
                <p>Here are a few example locations to try out:</p>
                <ol>
                   <li>
                       <Link to='/?location=Philadephia'>Philadelphia, PA</Link>
                   </li>
                   <li>
                       <Link to='/?location=Dallas'>Dallas, TX</Link>
                   </li> 
                </ol>
                
            </div>
            
        );
    }
    
});

module.exports = Examples;