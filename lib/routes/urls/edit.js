'use strict';

const Joi = require('@hapi/joi');

module.exports = {
    method: 'PUT',
    path: '/api/urls/{id}',
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

            const { id } = request.params;
            const { payload } = request;
            const { urlService } = request.services();
            return urlService.edit(id, payload);
        }
    }
};
