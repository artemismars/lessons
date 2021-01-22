const jwt = require("jsonwebtoken");

function generateToken(userInfo, callback) {
  let secret = process.env.SECRET;
  console.log(secret);
  let token = jwt.sign(
    {
      data: userInfo,
    },
    secret,
    {
      expiresIn: "12h",
    }
  );
  return callback(token);
}

function validateToken(token, callback) {
  if (!token) {
    return callback(false);
  }

  let secret = process.env.SECRET;
  jwt.verify(token.replace("Bearer ", ""), secret, (error, decoded) => {
    if (error) {
      return callback(false);
    } else {
      return callback(true);
    }
  });
}

module.exports = {
  generateToken,
  validateToken,
};
