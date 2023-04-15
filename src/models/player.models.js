const mongoose = require("mongoose");
const { Schema } = mongoose;

const playerSchema = new Schema (
    {
         firstName:{
            type: String,
            allowNull: false
          },
          lastName:{
            type: String,
            allowNull: false
          },
          contact:{
            type: Number,
            allowNull: false
          },
          email:{
            type: String,
            allowNull:false,
            unique: true
          },
          match:{
            type: Number,
            allowNull:false
          },
          score:{
            type: Number,
            allowNull:false
          },
          highestscore:{
            type: Number,
            allowNull:false
          },
          playertype:{
            type: String,
            allowNull: false
          },
          nationalityCountry:{
            type: String,
            allowNull: false
          },
          bidprice: {
            type: Number,
            allowNull: false
          }
    },
    { timestamps: true }
)

const Player1 = mongoose.model("Player1", playerSchema);

module.exports = Player1;