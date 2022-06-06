const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello.. the server is working!");
});

app.listen(4000, function () {
  console.log("Server started at port 4000...");
});
