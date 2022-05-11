const express = require("express");
const router = express.Router();
const { Usuarios } = require("../models");

// GET /Usuarios
router.get("/", async (req, res) => {
  const listOfUsuarios = await Usuarios.findAll();
  res.json(listOfUsuarios);
});

//POST /Usuarios
router.post("/", async (req, res) => {
  const profile = req.body;
  await Usuarios.create(profile);
  res.json(profile);
});

module.exports = router;
