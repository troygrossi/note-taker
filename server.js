const PORT = process.env.PORT || 3001;

const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./Develop/public"));

const htmlRoutes = require("./Develop/routes/htmlRoutes/index.js");
const apiRoutes = require("./Develop/routes/apiRoutes/index.js");

app.use("", htmlRoutes);
app.use("", apiRoutes);

app.listen(PORT, () => {
  console.log("API server now on port " + PORT);
});
