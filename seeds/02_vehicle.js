
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM vehicle; ALTER SEQUENCE vehicle_id_seq RESTART WITH 7')
  .then(function () {
    return knex('vehicle').insert([
        {
          id: 1,
          make: "Toyota",
          model: "4-Runner",
          year: 2016,
          payment: 500,
          insurance: 110,
          user_id: 1
        }
      ])
    })
}
