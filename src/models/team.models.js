const mongoose = require("mongoose");
const { Schema } = mongoose;

const teamSchema = new Schema(
    {
        Name: {
            type: String,
            allowNull: false,
            unique: true
        },
        location: {
            type: String,
            allowNull: false
        },
        owner: {
            type: String,
            allowNull: false
        },
        numberofwins: {
            type: String,
            allowNull: false
        },
        foundingyear: {
            type: String,
            allowNull: false
        },
        dresscolor: {
            type: String,
            allowNull: false
        },
        sponser: {
            type: Array(String),
            allowNull: false
        },
        captain: {
            type: String,
            allowNull: false,
            unique: true
        },
        headcoach: {
            type: String,
            allowNull: false,
            unique: true
        },
        battingcoach: {
            type: String,
            allowNull: false,
            unique: true
        },
        bowlingcoach: {
            type: String,
            allowNull: false,
            unique: true
        }
    },
    { timestamps: true }
);


const Team = mongoose.model("Team", teamSchema);

module.exports = Team;