/** @type {import('next').NextConfig} */

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withVanillaExtract = createVanillaExtractPlugin()

const nextConfig = {
    webpack: (config) => {
        config.resolve.fallback = { fs: false }
        return config
    },
}

module.exports = withVanillaExtract(nextConfig)
