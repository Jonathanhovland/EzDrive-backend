const express = require("express")
const router = express.Router()
const knex = require("../db/connection")

//Get all route
router.get("/", (req, res, next) => {
    knex("users")
      .orderBy("id", "asc")
      .then(users => {
        res.json({ users })
      })
      .catch(next)
   })
   
   //Get one route
   router.get("/:id", (req, res, next) => {
    const id = req.params.id
   
    knex("users")
      .where("id", id)
      .then(user => {
        res.json({ user: user[0] })
      })
      .catch(next)
   })
   
   //Post
   
   router.post("/", (req, res, next) => {
    const body = req.body
    knex("users")
      .insert(body)
      .returning("*")
      .then(user => {
        return res.json({ user: user[0] })
      })
      .catch(next)
   })
   
   //put
   router.put("/:id", (req, res, next) => {
    const id = req.params.id
    const body = req.body
   console.log(req.body)
    knex("users")
      .where("id", id)
      .update(body)
      .returning("*")
      .then(updatedUser => {
        res.json({ user: updatedUser[0] })
      })
      .catch(next)
   })
   
   //delete
   router.delete("/:id", (req, res) => {
    const id = req.params.id
   
    knex("users")
      .where("id", id)
      .delete()
      .returning("*")
      .then(deletedUser => {
        res.json({ authors: deletedUser[0] })
      })
   })

module.exports = router