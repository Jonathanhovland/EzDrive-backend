
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM maintenance; ALTER SEQUENCE maintenance_id_seq RESTART WITH 5')
  .then(function () {
    return knex('maintenance').insert([
        {
          id: 1,
          vehicle_id: 1,
          maint_type_id: 1,
          date: "12/10/2018",
          miles: 42102,
          trip_miles: 200,
          cost: 20,
          gas_amount: 10,
          gas_mpg: 15
        },
        {
          id: 2,
          vehicle_id: 1,
          maint_type_id: 2,
          date: "1/2/2019",
          miles: 42102,
          cost: 20,
          descr: "Oil Change"
        },
        {
          id: 3,
          vehicle_id: 1,
          maint_type_id: 3,
          date: "1/2/2019",
          miles: 42102,
          cost: 20,
          descr: "Tire Rotation"
        },
        {
          id: 4,
          vehicle_id: 1,
          maint_type_id: 4,
          date: "1/2/2019",
          miles: 42102,
          cost: 20,
          descr: "Other"
        }
      ])
    })
}
