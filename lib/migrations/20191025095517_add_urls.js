'use strict';

const tableName = 'urls';

exports.up = function (knex) {

    return knex.schema.createTable(tableName, (table) => {

        table.increments('id').primary();
        table.string('code').unique().notNullable();
        table.string('url').notNullable();
        table.string('android').nullable();
        table.string('ios').nullable();
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {

    return knex.schema.dropTable(tableName);
};
