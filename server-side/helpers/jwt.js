const jwt = require("jsonwebtoken");
const secret_key = "NinjaBaru";

function signToken(payload) {
  const token = jwt.sign(payload, secret_key);
  return token;
}

function verifyToken(token) {
  const payload = jwt.verify(token, secret_key);
  return payload;
}

module.exports = {
  signToken,
  verifyToken,
};
