const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    purgecss({
        content: [
            './src/**/*.vue',
            './public/index.html'
        ],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:]+/g) || []
    })
  ]
}