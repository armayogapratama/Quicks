const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("hello world");
});

router.use("/user", require("./user"));

module.exports = router;
