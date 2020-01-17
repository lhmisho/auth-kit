const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const Dotenv = require('dotenv-webpack')
const withOffline = require('next-offline')

require('dotenv').config()

const path = require('path')

const config = {
    webpack: config => {
        config.plugins = config.plugins || []

        config.plugins = [
            ...config.plugins,

            // Read the .env file
            new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true
            }),

        ]
        return config
    }
}

module.exports = withOffline(withSass(withCss(config)))
