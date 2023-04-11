const express = require("express");
const TeamController = require("../controllers/team.controller");

const TeamRouter = express.Router();

TeamRouter.post("/team", TeamController.createTeam)

module.exports = TeamRouter