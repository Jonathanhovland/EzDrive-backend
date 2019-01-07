exports.up = function(knex, Promise) {
    return knex.schema.createTable('maintenance', function (table) {
      table.increments()
      table.integer('vehicle_id').references('vehicle.id').unsigned().onDelete('cascade')
      table.string('veh-mileage')
      table.string('gas-amount')
      table.string('gas-cost')
      table.string('maint-descr')
      table.string('maint-cost')

    })
   }
   
   exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('maintenance')
   }