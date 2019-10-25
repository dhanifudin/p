'use strict';

const Schwifty = require('schwifty');
const Joi = require('@hapi/joi');

module.exports = class Urls extends Schwifty.Model {

    static get tableName() {

        return 'urls';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.number().integer(),
            code: Joi.string(),
            url: Joi.string(),
            android_url: Joi.string(),
            ios_url: Joi.string()
        }); // eslint-disable-line no-undef
    }
};
