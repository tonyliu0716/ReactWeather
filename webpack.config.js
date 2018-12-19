// this file must be named by using the name 'webpack.config.js'

// the same as command:  webpack ./public/app.js ./public/bundle.js


// after the webpack config, we simply run the 'webpack' command on the terminal
// to re-generate the bundle.js file


//----------

var webpack = require('webpack');

module.exports = {
    // use jquery and foundation need to run: npm install css-loader@0.23.1 script-loader@0.6.1 style-loader@0.13.0 jquery@2.2.1 foundation-sites@6.2.0 --save-dev

    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        // tell webpack to pick up the name and know how to use them
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
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
            openWeatherMap: 'app/api/openWeatherMap.jsx',
            ErrorModal: 'app/components/ErrorModal.jsx',
            applicationStyles: 'app/styles/app.css'
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