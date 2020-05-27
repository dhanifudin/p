'use strict';

const Bounce = require('@hapi/bounce');

const authUsername = process.env.AUTH_USERNAME;
const authPassword = process.env.AUTH_PASSWORD;

module.exports = (server, options) => ({
    scheme: 'basic',
    options: {
        validate: async (request, username, password, h) => {

            const isValid = (authUsername === username
                && authPassword === password);
            const credentials = { id: 1, name: 'Administrator' };

            return { isValid, credentials };
        }
    }
});
