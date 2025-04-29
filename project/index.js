const express = require("express");
const dbConnect = require("./config/db");
const router = require("./routes/user");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
// user router
// /api/v1/users
app.use("/api/users", router);

const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  dbConnect();
});
