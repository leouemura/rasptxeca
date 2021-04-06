
exports.up = function(knex) {
  return knex.schema
    .createTable('devices', function (table) {
       table.string('id').primary().notNullable();
       table.string('name',100).notNullable();
       table.string('topic').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("devices")
};
