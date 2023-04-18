
const express = require("express");
const connect = require('../src/config/database.config');
const TeamRouter = require('../src/routes/team.routes');
const PlayerRouter = require('../src/routes/player.routes');

require('dotenv').config()
const app = express();

const SetupandStartServer = async function () {
    
    app.use(express.json());
    app.use(TeamRouter);
    app.use(PlayerRouter);
    

    await connect();
    console.log("Database started");



    const PORT = process.env.PORT;
    app.listen(PORT, (req, res) => {
        console.log(`server started at ${PORT}`);
    })

}

SetupandStartServer();