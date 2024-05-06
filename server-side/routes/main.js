const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("hello world");
});

router.use("/", require("./user"));
router.use("/todo", require("./todo"));

module.exports = router;
