
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM maintenance; ALTER SEQUENCE maintenance_id_seq RESTART WITH 2')
  .then(function () {
    return knex('maintenance').insert([
        {
          id: 1,
          vehicle_id: 1,
          maint_type_id: 1,
          date: "1/2/2019",
          miles: 42102,
          cost: 20,
          gas_amount: 10,
          descr: "Scheduled Oil Change"
        }
      ])
    })
}
