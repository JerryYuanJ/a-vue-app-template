'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap


module.exports = {
  loaders: Object.assign(utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),{
    i18n: '@kazupon/vue-i18n-loader'
  }),
  cssSourceMap: sourceMapEnabled,
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
