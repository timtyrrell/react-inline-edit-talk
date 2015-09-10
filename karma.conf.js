var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS' ], //run in Phantomjs
    singleRun: true, //just run once by default
    frameworks: [ 'mocha' ], //use the mocha test framework
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'webpack.tests.js'
    ],
    preprocessors: {
      'webpack.tests.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'dots' ], //report results in this format
    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          {
            exclude: /node_modules/,
            test: /\.js/,
            loader: 'babel'
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};
