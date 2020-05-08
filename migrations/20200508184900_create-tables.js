exports.up = function (knex) {
  return knex.schema.createTable("takedowns", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique();
    })
    .createTable("guard", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique();
    })
    .createTable("mount", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique();
    })
    .createTable("sidemount", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique();
    })
    .createTable("back", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("back")
    .dropTableIfExists("sidemount")
    .dropTableIfExists("mount")
    .dropTableIfExists("guard")
    .dropTableIfExists("takedowns");
};
