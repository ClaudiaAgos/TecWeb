const express = require('express');
const path = require('path');
const app = express();


app.use("/", express.static(path.join(__dirname, "angular")));

app.use("/editor", )

app.use((req, res, next) => {
  res.sendFile( path.join(__dirname,"angular", "index.html"));
});



module.exports = app;