'use strict';

const defaultUrl = process.env.DEFAULT_URL;

module.exports = {
    method: 'GET',
    path: '/',
    options: {
        auth: false,
        handler: async (request, h) => {

            return h.redirect(defaultUrl);
        }
    }
};
