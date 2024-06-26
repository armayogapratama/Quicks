const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

const router = require("./routes/main");

require("./config/db/db");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
