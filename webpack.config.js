const webpack = require('webpack');
const path = require('path');

const merge = require('webpack-merge');
const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  js: path.join(__dirname, 'js'),
  build: path.join(__dirname, 'build'),
  css: path.join(__dirname, 'style.css')
};

const common = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    resolve: {
    extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [
            { test: /\.css$/, loaders: ['style', 'css'], include: PATHS.css },
            { test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/ },
            { test: /\.js$/, loader: 'babel?presets[]=es2015', exclude: PATHS.node_modules },
        ]
    }
};


// Default configuration
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
  devServer: {
    contentBase: __dirname, //change to/for output
    // Enable history API fallback so HTML5 History API based
    // routing works. This is a good default that will come
    // in handy in more complicated setups.
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    // Display only errors to reduce the amount of output.
    stats: 'errors-only',
    // Parse host and port from env so this is easy to customize.
    // If you use Vagrant or Cloud9, set
    // host: process.env.HOST || '0.0.0.0';
    // 0.0.0.0 is available to all network devices unlike default
    // localhost
    host: process.env.HOST,
    port: process.env.PORT
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
}
