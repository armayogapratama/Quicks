const mongoose = require("mongoose");
const { signPassword } = require("../helpers/bcrypt");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new Schema({
  _id: {
    type: ObjectId,
    auto: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Password is required"],
    minLength: 6,
  },
});

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }

  user.password = signPassword(user.password);
  next();
});

const User = mongoose.model("users", userSchema);

module.exports = User;
