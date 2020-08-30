const withPWA = require('next-pwa');
const withCSS = require('@zeit/next-css');

module.exports = withPWA(withCSS({
    pwa: {
        disable: process.env.NODE_ENV !== 'production',
        dest: 'public'
    }
}));