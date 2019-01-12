
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM maint_type; ALTER SEQUENCE maint_type_id_seq RESTART WITH 2')
  .then(function () {
    return knex('maint_type').insert([
        {
          id: 1,
          information: "Gas"
        },
        {
          id: 2,
          information: "Oil Change"
        },
        {
          id: 3,
          information: "Tire Rotation"
        },
        {
          id: 4,
          information: "Other"
        }
      ])
    })
}
