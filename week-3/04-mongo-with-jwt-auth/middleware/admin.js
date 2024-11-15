const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  //Bearer asdasd => ["Bearer", asdasd]

  const words = token.split(" ");
  const jwtToken = words[1];
  try {
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    console.log(jwtToken);
    if (decodedValue.username) {
      next();
    } else {
      res.status(403).josn({
        msg: "You are not authenticated",
      });
    }
  } catch (e) {
    res.json({
      message: "wrong credentials",
    });
  }
}

module.exports = adminMiddleware;
