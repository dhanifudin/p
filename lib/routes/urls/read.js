'use strict';

const Joi = require('@hapi/joi');

module.exports = {
    method: 'GET',
    path: '/api/urls/{id}',
    options: {
        auth: 'basic',
        tags: ['api'],
        handler: async (request, h) => {

            const { id } = request.params;
            const { urlService } = request.services();
            if (isNaN(id)) {
                return await urlService.readByCode(id);
            }

            return await urlService.readById(id);
        }
    }
};
