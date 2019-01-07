
exports.up = function(knex, Promise) {
    return knex.schema.createTable('vehicle', function (table) {
      table.increments()
      table.integer('user_id').references('user.id').unsigned().onDelete('cascade')
      table.string('veh-make')
      table.string('veh-model')
      table.string('veh-year')
      table.string('veh-payment')
      table.string('veh-insurance')
    })
   }
   
   exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('vehicle')
   }
