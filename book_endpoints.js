// usersRouter.js
const express = require("express")
const router = express.Router()
const client = require("./client_db") // Import the client from db-client.js
const prisma = require("./prisma_client")
const do_paginate = require("./paginate")

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const { PrismaClientKnownRequestError } = require('@prisma/client');

// Rute untuk mendapatkan semua pengguna
router.get("/", async (req, res) => {
  console.log("List of books")
  const books = await prisma.Book.findMany()
  res.send(books)
})
router.get("/create", async (req, res) => {
  console.log("create a book")
  const book = await prisma.Book.create({
    data: {
      name: "cek",
    },
  })
  res.send(book)
})
router.get("/:id/detail", async (req, res) => {
  const { id } = req.params
  const book = await prisma.Book.findUnique({
    where: {
      id: parseInt(id),
    },
  })
  res.send(book)
})
router.get("/:id/update", async (req, res) => {
  const { id } = req.params
  const book = await prisma.Book.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name: "cek-edit",
    },
  })
  res.send(book)
})
router.get("/:id/delete", async (req, res) => {
  const { id } = req.params
  try {
    const cekBook = await prisma.Book.findUniqueOrThrow({
      where: {
        id: parseInt(id),
      },
    })
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      // Handle Prisma-specific error
      console.error("Prisma error:xxx")
      res.send({message:"Data tidak ditemukan"});
    } else {
      console.error("Record not found!")
    }
  }
})

module.exports = router
