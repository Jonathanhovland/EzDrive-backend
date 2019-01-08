
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM maintenance; ALTER SEQUENCE maintenance_id_seq RESTART WITH 2')
  .then(function () {
    return knex('maintenance').insert([
        {
          id: 1,
          vehicle_id: 1,
          veh_mileage: 40000,
          gas_amount: 10,
          gas_cost: 20,
          maint_descr: "Oil Change",
          maint_cost: 110
        }
      ])
    })
}
