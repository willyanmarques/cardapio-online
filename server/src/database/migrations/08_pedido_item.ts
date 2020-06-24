import Knex from 'knex';

export async function up(knex: Knex) {
    knex.schema.hasTable('pedido_item').then(exists => {
        if (!exists) {
            return knex.schema.createTable('pedido_item', table => {
                table.increments('id_pedido_item').primary();
                table.integer('id_produto');
                table.integer('pedido_id').unsigned().notNullable();
                table.float('valor_produto');
                table.integer('quantidade');
                table.foreign('pedido_id')
                    .references('id_pedido')
                    .inTable('pedido');
                table.timestamp('dataHora').defaultTo(knex.fn.now());
            });
        }
    });
}

export async function down(knex: Knex) {
    knex.schema.hasTable('pedido_item').then(exists => {
        if (exists) {
            return knex.schema.dropTable('pedido_item');
        }
    })
}