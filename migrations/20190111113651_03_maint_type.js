
exports.up = function(knex, Promise) {
    return knex.schema.createTable('maint_type', function (table){
      table.increments()
      table.string("information")
      })
  }
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('maint_type')
  }
