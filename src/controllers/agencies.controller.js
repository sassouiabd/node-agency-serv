const AGENCIES_DATA = [
  {
    ID: 0,
    Nom: "Agence de Lyon",
    Responsable: "Jean",
    Activité: "Électrique",
  },
  {
    ID: 1,
    Nom: "Agence de Toulouse",
    Responsable: "Marc",
    Activité: "Climatisation ",
  },
  {
    ID: 2,
    Nom: "Agence de Paris",
    Responsable: "Sophie",
    Activité: "Plomberie",
  },
  {
    ID: 3,
    Nom: "Agence de Grenoble",
    Responsable: "Claire",
    Activité: "Électrique",
  },
  {
    ID: 4,
    Nom: "Agence de Rennes",
    Responsable: "Hugo",
    Activité: "Électrique",
  },
];
exports.retrieveAll = async (req, res) => {
  try {
    res.json({
      agencies: AGENCIES_DATA,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
