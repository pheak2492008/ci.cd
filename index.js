const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD is working 🚀");
});

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:{PORT} ");
});
