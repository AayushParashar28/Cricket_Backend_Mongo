const TeamModel = require("../models/team.models");

exports.createTeam = async (req, res) => {
  try {
    const team = {
      Name: req.body.Name,
      location: req.body.location,
      owner: req.body.owner,
      numberofwins: req.body.numberofwins,
      foundingyear: req.body.foundingyear,
      dresscolor: req.body.dresscolor,
      sponser: req.body.sponser,
      captain: req.body.captain,
      headcoach: req.body.headcoach,
      battingcoach: req.body.battingcoach,
      bowlingcoach: req.body.bowlingcoach
    };

    const result = await TeamModel.create(team);

    return res.status(201).json({
      msg: result,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
};

exports.updateTeam = async (req, res) => {
  try {
    const team = {
      Name: req.body.Name
    }
    const checkTeam = await TeamModel.findOne({ Name: team.Name })

    if (checkTeam) {
      checkTeam.location = req.body.location,
        checkTeam.owner = req.body.owner,
        checkTeam.numberofwins = req.body.numberofwins,
        checkTeam.dresscolor = req.body.dresscolor,
        checkTeam.sponser = req.body.sponser,
        checkTeam.captain = req.body.captain,
        checkTeam.headcoach = req.body.headcoach,
        checkTeam.battingcoach = req.body.battingcoach,
        checkTeam.bowlingcoach = req.body.bowlingcoach

      const result = await checkTeam.save();
      return res.status(200).json({
        "result": result
      })
    }
    else {
      return res.status(200).json({
        "msg": "User Not Found"
      })
    }


  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
}

exports.getAllTeam = async (req, res) => {
  try {
    const result = await TeamModel.find().populate("players" , "firstName , lastName ,  contact , email "  )

    return res.status(201).json({
      sucess: true,
      response: result,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
}