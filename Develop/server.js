const PORT = process.env.PORT || 3001;

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const htmlRoutes = require("./routes/htmlRoutes/index.js");
const apiRoutes = require("./routes/apiRoutes/index.js");

app.use("", htmlRoutes);
app.use("", apiRoutes);

app.listen(PORT, () => {
  console.log("API server now on port " + PORT);
});
