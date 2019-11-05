'use strict';

const Scooter = require('@hapi/scooter');

module.exports = {
    name: 'app-scooter',
    async register(server) {

        await server.register({
            plugin: Scooter
        });
    }
};
