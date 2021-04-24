const mongoose = require("mongoose");

const agencySchema = mongoose.Schema({
  Nom: {
    type: String,
    required: true,
  },
  Responsable: {
    type: String,
    required: true,
  },
  Activité: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Agency", agencySchema);
