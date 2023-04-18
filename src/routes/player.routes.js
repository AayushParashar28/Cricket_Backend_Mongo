const express = require("express");
const PlayerController = require("../controllers/player.controller");

const PlayerRouter = express.Router();

PlayerRouter.post("/player", PlayerController.createPlayer)

PlayerRouter.get("/allPlayers", PlayerController.allPlayers)

PlayerRouter.post("/updateDetails", PlayerController.UpdatePlayer)

PlayerRouter.post("/team/:teamid/player/:playerid",PlayerController.addPlayer)

module.exports = PlayerRouter
