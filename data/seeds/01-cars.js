exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        { Make: "test", Model: "test", Mileage: 0 },
        { Make: "test", Model: "test", Mileage: 0 },
        { Make: "test", Model: "test", Mileage: 0 },
        { Make: "test", Model: "test", Mileage: 0 }
      ]);
    });
};
