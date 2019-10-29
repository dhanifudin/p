'use strict';

const Basic = require('@hapi/basic');

const authUsername = process.env.AUTH_USERNAME;
const authPassword = process.env.AUTH_PASSWORD;

const validate = async (request, username, password, h) => {

    const isValid = (authUsername === username && authPassword === password);
    const credentials = { id: 1, name: 'Administrator' };

    return { isValid, credentials };
};

module.exports = {
    name: 'app-basic',
    async register(server) {

        await server.register({
            plugin: Basic
        });

        server.auth.strategy('simple', 'basic', { validate });
        server.auth.default('simple');
    }
};
