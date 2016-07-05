// webpack.config.js
//webpack config
var liveReload = require('webpack-livereload-plugin');
module.exports = {
  entry: "./src/index.js",
  output: {
      path: __dirname,
      filename: "../server/dist/bundle.js"
  },
  devtool: 'source-map',
  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
              presets: ['es2015', 'react']
            }
          }
      ]
  },
  plugins: [
    new liveReload({
      port: 35729
    })
  ]
};
