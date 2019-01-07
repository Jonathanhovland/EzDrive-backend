const express = require("express")
const router = express.Router()
const knex = require("../db/connection")

//Get all route
router.get("/", (req, res) => {
    knex("vehicle")
      .orderBy("id", "asc")
      .then(vehicles => {
        res.json({ vehicles })
      })
   })
   
   //Get one route
   router.get("/:id", (req, res, next) => {
    const id = req.params.id
   
    knex("vehicle")
      .where("id", id)
      .then(vehicle => {
        res.json({ vehicle: vehicle[0] })
      })
   })
   
   //Post
   
   router.post("/", (req, res, next) => {
    const body = req.body
   
    knex("vehicle")
      .insert(body)
      .returning("*")
      .then(vehicle => {
        res.json({ vehicle: vehicle[0] })
      })
   })
   
   //put
   router.put("/:id", (req, res) => {
    const id = req.params.id
    const body = req.body
   
    knex("vehicle")
      .where("id", id)
      .update(body)
      .returning("*")
      .then(updatedVehicle => {
        res.json({ user: updatedVehicle[0] })
      })
   })
   
   //delete
   router.delete("/:id", (req, res) => {
    const id = req.params.id
   
    knex("vehicle")
      .where("id", id)
      .delete()
      .returning("*")
      .then(deletedVehicle => {
        res.json({ vehicles: deletedVehicle[0] })
      })
   })

module.exports = router