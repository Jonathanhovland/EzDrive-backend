
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM users; ALTER SEQUENCE users_id_seq RESTART WITH 2')
  .then(function () {
    return knex('users').insert([
        {
          id: 1, 
          username: "jhovland99",
          password: "billbain"
        }
      ])
    })
}
