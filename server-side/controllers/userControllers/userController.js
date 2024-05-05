const { signPassword, verifyPassword } = require("../../helpers/bcrypt");
const { signToken } = require("../../helpers/jwt");
const User = require("../../models/user");

class UserController {
  static async register(req, res) {
    try {
      const { fullName, username, email, password } = req.body;

      const user = await User.create({
        fullName,
        username,
        email,
        password,
      });

      res.status(201).json({
        message: "Success created new user",
        user,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) throw { name: "EmptyEmailPassword" };

      const user = await User.findOne({ email });

      const verify = verifyPassword(password, user.password);

      if (!user || !verify) throw { name: "InvalidUser" };

      const access_token = signToken({ _id: user._id });

      res.status(200).json({
        message: "Success Login",
        access_token,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserController;
