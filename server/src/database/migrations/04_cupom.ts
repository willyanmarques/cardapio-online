import Knex from 'knex';

export async function up(knex: Knex) {
    knex.schema.hasTable('cupom').then(exists => {
        if (!exists) {
            return knex.schema.createTable('cupom', table => {
                table.increments('id_cupom').primary();
                table.string('codigo').notNullable();
                table.string('descricao').notNullable();
                table.float('valor').notNullable();
                table.string('validade').notNullable();
                table.integer('is_percentual').notNullable();
                table.integer('ativo', 1).notNullable();
            });
        }
    });
}

export async function down(knex: Knex) {
    knex.schema.hasTable('cupom').then(exists => {
        if (exists) {
            return knex.schema.dropTable('cupom');
        }
    })
}