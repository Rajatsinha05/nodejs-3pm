const express = require("express");
const dbConnect = require("./db");
const User = require("./user");
const validate = require("./middleware");
const app = express();
app.use(express.json());
app.get("/", async (req, res) => {
  const { gender, name } = req.query;
  let query = {};
  if (gender) {
    query.gender = gender;
  }

  let users = await User.find(query);
  res.send(users);
});
app.post("/", validate, async (req, res) => {
  let user = await User.create(req.body);
  res.send(user);
});
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  let user = await User.findByIdAndDelete(id);
  res.send(user);
});
app.patch("/:id", async (req, res) => {
  const { id } = req.params;
  let user = await User.findByIdAndUpdate(id, req.body, { new: true });
  res.send(user);
});
app.get("/info/:id", async (req, res) => {
  const { id } = req.params;
  let user = await User.findById(id);
  res.send(user);
});

app.listen(8090, () => {
  console.log("server started");
  dbConnect();
});
