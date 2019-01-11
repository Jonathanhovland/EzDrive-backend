
exports.up = function(knex, Promise) {
    return knex.schema.createTable('vehicle', function (table) {
      table.increments()
      table.integer('users_id').references('users.id').unsigned().onDelete('cascade')
      table.string('make')
      table.string('model')
      table.integer('year')
      table.integer('registration')
      table.integer('payment')
      table.integer('insurance')
    })
  }
     
     exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('vehicle')
     }
