const express = require("express");
const TeamController = require("../controllers/team.controller");

const TeamRouter = express.Router();

TeamRouter.post("/team", TeamController.createTeam)

TeamRouter.patch("/update", TeamController.updateTeam)

TeamRouter.get("/getAllTeam", TeamController.getAllTeam)

module.exports = TeamRouter