const webpack = require('webpack')

module.exports = {
  entry: {
    'pageA': './src/pages/pageA.js',
    'pageB': './src/pages/pageB.js',
    'main': './src/main.js'
  },
  output: {
    filename: './dist-with-commons-chunk/scripts/bundle-[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 2
    })
  ]
}