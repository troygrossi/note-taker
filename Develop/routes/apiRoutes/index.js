const router = require("express").Router();
const path = require("path");
const { notes } = require(path.join(__dirname, "../../db/db.json"));

router.get("/notes", (req, res) => {
  res.send(notes);
});

router.post("/notes", (req, res) => {
  res.json(notes);
});

module.exports = router;
