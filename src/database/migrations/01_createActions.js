
exports.up = function (knex) {
  return knex.schema
    .createTable('actions', function (table) {
      table.string('id').primary().notNullable();
      table.string('frequency').notNullable();
      table.string('timestamp', 100).notNullable();
      table
      .integer('action')
      .unsigned()
      .notNullable();

      table.foreign('action')
        .references('name')
        .inTable('devices');
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("actions")
};
