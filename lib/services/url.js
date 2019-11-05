'use strict';

const Bounce = require('@hapi/bounce');
const Schmervice = require('schmervice');
const { UniqueViolationError } = require('objection-db-errors');

module.exports = class UrlService extends Schmervice.Service {

    async browse({ code, limit, offset }, txn) {

        const { Url } = this.server.models();

        const query = Url.query(txn);

        if (code) {
            query.where({ code });
        }

        const [urls, total] = await Promise.all([
            query.limit(limit).offset(offset),
            query.resultSize()
        ]);

        return { urls, total };
    }

    async readById(id, txn) {

        const { Url } = this.server.models();

        return await Url
            .query(txn)
            .throwIfNotFound()
            .findById(id);
    }

    async readByCode(code, txn) {

        const { Url } = this.server.models();

        return await Url
            .query(txn)
            .throwIfNotFound()
            .first()
            .where({ code });
    }

    async edit(id, data, txn) {

        const { Url } = this.server.models();

        return await Url
            .query(txn)
            .findById(id)
            .patch(data);
    }

    async add(data, txn) {

        const { Url } = this.server.models();

        try {
            return await Url.query(txn)
                .insertAndFetch(data);
        }
        catch (err) {
            Bounce.ignore(err, UniqueViolationError);
        }
    }

    async delete(id, txn) {

        const { Url } = this.server.models();

        return await Url.query(txn)
            .throwIfNotFound()
            .delete()
            .where({ id });
    }

};
