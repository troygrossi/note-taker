const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const { notes } = require("../../db/db.json");

router.get("/api/notes", (req, res) => {
  res.json(notes);
});

router.get("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  const noteById = notes.filter((notes) => {
    if (parseInt(note.id) === id) {
      return note;
    }
  });
  res.json(noteById);
});

router.post("/api/notes", (req, res) => {
  const newNotes = req.body;
  newNotes.id = notes.length.toString();
  notes.push(newNotes);
  fs.writeFile(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify({ notes: notes }, null, 2),
    (err) => {
      if (err) {
        throw new Error(err);
      }
    }
  );
  res.json(notes);
});

module.exports = router;
