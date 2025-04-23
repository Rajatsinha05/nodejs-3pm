const express = require("express");
const dbConnect = require("./db");
const User = require("./user");
const app = express();
app.use(express.json())
// api
app.get("/", async (req, res) => {
  let users = await User.find();
  res.send(users);
});
app.get("/user", (req, res) => {
  res.send("testing user");
});
// post
app.post("/",async(req,res)=>{
    let user=await User.create(req.body)
    res.send(user)
});

app.listen(8090, () => {
  console.log(`server is listening on port 8090`);
  dbConnect();
});
