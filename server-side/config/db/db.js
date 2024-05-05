const mongoose = require("mongoose");

const mongodb_url = "mongodb://localhost:27017/quicks";

mongoose.connect(mongodb_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});
