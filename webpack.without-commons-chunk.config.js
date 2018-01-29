const webpack = require('webpack')

module.exports = {
  entry: {
    'pageA': './src/pages/pageA.js',
    'pageB': './src/pages/pageB.js',
    'main': './src/main.js'
  },
  output: {
    filename: './dist-without-commons-chunk/scripts/bundle-[name].js'
  }
}