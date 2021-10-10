const propelAuth = require('@propelauth/express');
module.exports = propelAuth.initAuth({
    debugMode: true,
    authUrl: 'https://REPLACE_ME.propelauth.com',
    apiKey: 'REPLACE_ME'
})

