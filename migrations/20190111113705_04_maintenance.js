
exports.up = function(knex, Promise) {
    return knex.schema.createTable('maintenance', function (table) {
      table.increments()
      table.integer('vehicle_id').references('vehicle.id').unsigned().onDelete('cascade')
      table.integer('maint_type_id').references('maint_type.id').unsigned().onDelete('cascade')
      table.string('date')
      table.integer('miles')
      table.integer('cost')
      table.integer('gas_amount')
      table.string('descr')
    })
   }
   
   exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('maintenance')
   }
