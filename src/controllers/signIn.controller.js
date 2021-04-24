exports.login = async (req, res) => {
  try {
    res.json({
      message: "signedIn",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
