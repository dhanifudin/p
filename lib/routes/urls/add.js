'use strict';

const Joi = require('@hapi/joi');

module.exports = {
    method: 'POST',
    path: '/api/urls',
    options: {
        auth: 'basic',
        tags: ['api'],
        validate: {
            payload: {
                code: Joi.string(),
                url: Joi.string(),
                android: Joi.string(),
                ios: Joi.string()
            }
        },
        handler: async (request, h) => {

            const { payload } = request;
            const { urlService } = request.services();
            return await urlService.add(payload);
        }
    }
};
