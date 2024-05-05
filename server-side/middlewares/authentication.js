const User = require("../models/user");

async function authentication(req, res) {
  try {
    const token = req.headers.authorization;

    if (!token) throw { name: "InvalidUser" };

    const [bearer, access_token] = token.split(" ");

    if (bearer !== "Bearer") throw { name: "InvalidToken" };

    const payload = verifyToken(access_token);

    const user = await User.findOne({ _id: payload._id });

    if (!user) throw { name: "InvalidUser" };

    req.user = user;
  } catch (error) {
    console.log(error);
  }
}

module.exports = authentication;
