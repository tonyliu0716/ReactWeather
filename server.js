var express = require('express');

// create our app
var app = express();

// heroku needs to find a different port to deploy
const PORT = process.env.PORT || 3000;

// transfer HTTPS to HTTP
app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        // send https to http
        next();
        res.redirect('http://' + req.hostname + req.url);
    } else {
        // process the next request
        next();
    }
});


app.use(express.static('public'));

app.listen(PORT, function () {
    console.log('Express server is up on port ' + PORT);
});