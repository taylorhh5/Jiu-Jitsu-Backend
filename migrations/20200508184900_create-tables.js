exports.up = function (knex) {
    return knex.schema.createTable("users", (tbl) => {
        tbl.increments();
        tbl.string("email", 128).notNullable().unique()
        tbl.string("password", 128).notNullable();
        tbl.string("image_url", 500)

      })
  .createTable("takedown", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique()
      tbl.text("description").notNullable()
      tbl.string("image_url", 500)

      
      tbl.integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    })
    .createTable("guard", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique()
      tbl.text("description").notNullable()
      tbl.string("image_url", 500)

      tbl.integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    })
    .createTable("mount", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique()
      tbl.text("description").notNullable()
      tbl.string("image_url", 500)

      tbl.integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    })
    .createTable("sidemount", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique()
      tbl.text("description").notNullable()
      tbl.string("image_url", 500)

      tbl.integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    })
    .createTable("back", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique()
      tbl.text("description").notNullable()
      tbl.string("image_url", 500)

      tbl.integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("back")
    .dropTableIfExists("sidemount")
    .dropTableIfExists("mount")
    .dropTableIfExists("guard")
    .dropTableIfExists("takedown")
    .dropTableIfExists("users");
};
