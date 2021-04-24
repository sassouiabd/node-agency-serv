const Agency = require("../models/agency.model");

exports.add = async (req, res) => {
  try {
    const { Nom, Responsable, Activité } = req.body;
    const agency = new Agency({
      Nom,
      Responsable,
      Activité,
    });
    agency.save().then(result => {
      res.json({
        message: "Agency created !",
      });
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

exports.retriveAll = async (req, res) => {
  try {
    Agency.find().then(agencies => {
      console.log(agencies);
      res.json({
        agencies,
      });
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
