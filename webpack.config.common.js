var webpack = require('webpack');

module.exports = {
  entry: {
    'app': './assets/app/main.ts',           //the file that starts the angular application
  },
  resolve: {
    extensions: [ '.js', '.ts' ]            // to resolve extensions of files (.js is by default)
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular-router-loader'
        ]
      },
      {
        test: /\.html$/,
        loaders: ['html-loader']
      },
      {
        test: /\.css$/,
        loaders: ['raw-loader']
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // the (\\|\/) pice accounts for path separators in *nix and Windows
      // /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      /angular(\\|\/)core(\\|\/)@angular/,
      './src'
       //location of your src
    )
  ]
}
