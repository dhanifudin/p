'use strict';

const tableName = 'urls';

exports.up = function (knex) {

    return knex.schema.createTable(tableName, (table) => {

        table.increments('id').primary();
        table.string('code').unique().notNullable();
        table.string('url').notNullable();
        table.string('android_url').nullable();
        table.string('ios_url').nullable();
        table.timestamps();
    });
};

exports.down = function (knex) {

    return knex.schema.dropTable(tableName);
};
