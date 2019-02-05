const express = require("express")
const router = express.Router()
const knex = require("../db/connection")

//Get all route
router.get("/", (req, res) => {
    knex("maint_type")
      .orderBy("id", "asc")
      .then(maint_types => {
        res.json({ maint_types })
      })
   })
   
   //Get one route
   router.get("/id/:id", (req, res, next) => {
    const id = req.params.id
   
    knex("maint_type")
      .where("maint_type", id)
      .then(maint_type => {
        res.json({ maint_type: maint_type[0] })
      })
   })
   
   //Post
   
   router.post("/", (req, res, next) => {
    const body = req.body
   
    knex("maint_type")
      .insert(body)
      .returning("*")
      .then(maint_type => {
        res.json({ maint_type: maint_type[0] })
      })
   })
   
   //put
   router.put("/:id", (req, res) => {
    const id = req.params.id
    const body = req.body
   
    knex("maint_type")
      .where("id", id)
      .update(body)
      .returning("*")
      .then(updatedmaint_type => {
        res.json({ user: updatedmaint_type[0] })
      })
   })
   
   //delete
   router.delete("/:id", (req, res) => {
    const id = req.params.id
   
    knex("maint_type")
      .where("id", id)
      .delete()
      .returning("*")
      .then(deletedmaint_type => {
        res.json({ maint_types: deletedmaint_type[0] })
      })
   })


module.exports = router