exports.up = function(knex, Promise) {
    return knex.schema.createTable('maintenance', function (table) {
      table.increments()
      table.integer('vehicle_id').references('vehicle.id').unsigned().onDelete('cascade')
      table.integer('veh_mileage')
      table.integer('gas_amount')
      table.integer('gas_cost')
      table.string('maint_descr')
      table.integer('maint_cost')

    })
   }
   
   exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('maintenance')
   }