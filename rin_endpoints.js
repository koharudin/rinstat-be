// usersRouter.js
const express = require("express")
const router = express.Router()
const client = require("./client_db") // Import the client from db-client.js
const do_paginate = require("./paginate");

// Rute untuk mendapatkan semua pengguna
router.get("/", (req, res) => {
  res.send("List of users")
})
router.get("/get-all-count-downloads", async (req, res) => {
  res.send({ total: 540033 })
})
router.get("/list-new-user-affiliation", async (req, res) => {
    const sql = "select * from test.user_affiliation";
    console.log("params page "+ req.query.page)
    const paginateData = await do_paginate(client,sql,req.query.page);
  res.send(paginateData)
})

// Rute untuk mendapatkan satu pengguna berdasarkan ID
router.get("/:id", (req, res) => {
  const userId = req.params.id
  res.send(`User with ID: ${userId}`)
})

// Rute untuk menambahkan pengguna baru
router.post("/", (req, res) => {
  // Biasanya, di sini kamu akan menambahkan pengguna baru ke database
  res.send("User created")
})

module.exports = router
