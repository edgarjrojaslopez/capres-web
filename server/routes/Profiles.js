const express = require("express");
const router = express.Router();
const { Profiles } = require("../models");

// GET /profiles
router.get("/", async (req, res) => {
  const listOfProfiles = await Profiles.findAll();
  res.json(listOfProfiles);
});

//POST /profiles
router.post("/", async (req, res) => {
  const profile = req.body;
  await Profiles.create(profile);
  res.json(profile);
});

module.exports = router;
