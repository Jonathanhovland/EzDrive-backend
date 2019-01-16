const express = require("express")
const router = express.Router()
const knex = require("../db/connection")

//Get all route
router.get("/", (req, res) => {
    knex("maintenance")
      .orderBy("id", "asc")
      .then(maintenances => {
        res.json({ maintenances })
      })
   })
   
   //Get one route
   router.get("/id/:id", (req, res, next) => {
    const id = req.params.id
   
    knex("maintenance")
      .where("maint_type_id", id)
      .then(maintenance => {
        res.json({ maintenance: maintenance })
      })
   })
   
   //Post
   
   router.post("/", (req, res, next) => {
    const body = req.body
   
    knex("maintenance")
      .insert(body)
      .returning("*")
      .then(maintenance => {
        res.json({ maintenance: maintenance[0] })
      })
   })
   
   //put
   router.put("/:id", (req, res) => {
    const id = req.params.id
    const body = req.body
   
    knex("maintenance")
      .where("id", id)
      .update(body)
      .returning("*")
      .then(updatedMaintenance => {
        res.json({ user: updatedMaintenance[0] })
      })
   })
   
   //delete
   router.delete("/:id", (req, res) => {
    const id = req.params.id
   
    knex("maintenance")
      .where("id", id)
      .delete()
      .returning("*")
      .then(deletedMaintenance => {
        res.json({ maintenances: deletedMaintenance[0] })
      })
   })

      // maint. join 

      router.get("/:id", (req, res, next) => {
        const id = req.params.id
        knex("maint_type")
          .join("maintenance", "maint_type.id", "maintenance.maint_type_id")
          .where("maint_type.id", id)
          .then(users => {
            res.json({ users })
          })
          .catch(next)
       })

module.exports = router