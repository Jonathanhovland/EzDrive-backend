
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM vehicle; ALTER SEQUENCE vehicle_id_seq RESTART WITH 2')
  .then(function () {
    return knex('vehicle').insert([
        {
          id: 1,
          users_id: 1,
          make: "Toyota",
          model: "4-Runner",
          year: 2016,
          registration: 369,
          payment: 500,
          insurance: 100
        }
      ])
    })
}
