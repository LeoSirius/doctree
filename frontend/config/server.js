'use strict';
// https://github.com/webpack/webpack-dev-server/blob/master/examples/api/simple/server.js

process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

var Webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var configFactory = require('./webpack.config.dev')
var config = configFactory('development');

const compiler = Webpack(config);
const devServerOptions = Object.assign({}, config.devServer, {
  stats: {
    colors: true
  }
});

console.log('Dev server options:', devServerOptions);

const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(3003, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:3003');
});