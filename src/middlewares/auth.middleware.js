const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const userId = req.headers.userid;
    if (!userId) {
      throw "userId has not been provided";
    }
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userIdFromToken = decodedToken.userId;
    if (userId && userId !== userIdFromToken) {
      throw "User ID non valid !";
    }
    next();
  } catch (error) {
    res.status(401).json({ error: error | "Request not authorized !" });
  }
};
