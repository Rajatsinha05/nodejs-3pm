const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  res.send("hello , i'm node js  - api");
});

// listen .....

app.listen(8090, () => {
  console.log("server is listening on port 8090");
});
