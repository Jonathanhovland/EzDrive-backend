const express = require("express")
const router = express.Router()
const knex = require("../db/connection")

//Get all route
router.get("/", (req, res) => {
    knex("user")
      .orderBy("id", "asc")
      .then(users => {
        res.json({ users })
      })
   })
   
   //Get one route
   router.get("/:id", (req, res, next) => {
    const id = req.params.id
   
    knex("user")
      .where("id", id)
      .then(user => {
        res.json({ user: user[0] })
      })
   })
   
   //Post
   
   router.post("/", (req, res, next) => {
    const body = req.body
   
    knex("user")
      .insert(body)
      .returning("*")
      .then(user => {
        res.json({ user: user[0] })
      })
   })
   
   //put
   router.put("/:id", (req, res) => {
    const id = req.params.id
    const body = req.body
   
    knex("user")
      .where("id", id)
      .update(body)
      .returning("*")
      .then(updatedUser => {
        res.json({ user: updatedUser[0] })
      })
   })
   
   //delete
   router.delete("/:id", (req, res) => {
    const id = req.params.id
   
    knex("user")
      .where("id", id)
      .delete()
      .returning("*")
      .then(deletedUser => {
        res.json({ authors: deletedUser[0] })
      })
   })

module.exports = router