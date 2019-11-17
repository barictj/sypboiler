// next.config.js
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withSourceMaps = require('@zeit/next-source-maps')({
    devtool: 'hidden-source-map'
})
module.exports = withSourceMaps(withSass(withCSS({
    publicRuntimeConfig: { // Will be available on both server and client
        staticFolder: '/static',
        env: process.env.THIS // Pass through env variables
    },
    webpackDevMiddleware: (config) => {
        // Solve compiling problem via vagrant
        // Used if Docker Compose for dev to check for hot reload
        config.watchOptions = {
            poll: 1000,   // Check for changes every second
            aggregateTimeout: 300,   // delay before rebuilding
        }

        return config;
    }
})))