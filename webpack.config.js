require("babel-polyfill");

module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + '/app/App.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: "./public",
    inline: true,
    port: 3000,
    historyApiFallback: true,
    colors: true
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint']
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
