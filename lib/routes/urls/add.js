'use strict';

const Joi = require('@hapi/joi');

module.exports = {
    method: 'POST',
    path: '/api/urls/',
    options: {
        tags: ['api'],
        validate: {
            payload: {
                code: Joi.string().required(),
                url: Joi.string().required()
            }
        },
        handler: async (request, h) => {

            const { Urls } = request.models();
            const data = request.payload;
            return await Urls.query().insertAndFetch(data);
        }
    }
};