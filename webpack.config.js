
module.exports = {
  devtool: 'eval-source-map',
  entry: ['babel-polyfill',__dirname + '/app/module-animation/Animation.js'],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
   },
    debug: true,
  //  stats: {
  //       colors: true,
  //       reasons: true,
  //   },
  //   plugins: [
  //    new webpack.HotModuleReplacementPlugin()
  //  ],
  devServer: {
    contentBase: './public',
    inline: true,
    // hot:true,
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
        test: /\.js|es6$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
        query:{
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  }
};
