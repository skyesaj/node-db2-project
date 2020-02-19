exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments("Vin");

    tbl.string("Make", 128).notNullable();

    tbl.string("Model", 256).notNullable();

    tbl.integer("Mileage", 256).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
