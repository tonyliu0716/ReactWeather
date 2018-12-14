// this file must be named by using the name 'webpack.config.js'

// the same as command:  webpack ./public/app.js ./public/bundle.js


// after the webpack config, we simply run the 'webpack' command on the terminal
// to re-generate the bundle.js file


//----------

module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        // setting the root then we don't have to write something like 
        // var Greeter = require('./component/Greeter')
        // all we need to do is var Greeter = require('Greeter');
        root: __dirname,
        alias: {
            // tell webpack where to find the components
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Weather: 'app/components/Weather.jsx',
            About: 'app/components/About.jsx',
            Examples: 'app/components/Examples.jsx',
            WeatherForm: 'app/components/WeatherForm.jsx',
            WeatherMessage: 'app/components/WeatherMessage.jsx',
            openWeatherMap: 'app/api/openWeatherMap.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    // need to get babel loader to handle jsx file
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                // select all the file have .jsx extension
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    // remember to use this devtool so we can easily debug errors
    devtool: 'inline-source-map'

};

// webpack -w   ------> real time changed will update on webpack.