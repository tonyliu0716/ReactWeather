var express = require('express');

// create our app
var app = express();

// heroku needs to find a different port to deploy
const PORT = process.env.PORT || 3000;

// transfer HTTP to HTTPS
/*
app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'http') {
        // process the next request
        next();
    } else {
        // send https to http
        res.redirect('http://' + req.hostname + req.url);
    }
});
*/

app.use(express.static('public'));

app.listen(PORT, function () {
    console.log('Express server is up on port ' + PORT);
});