const router = require("express").Router();
const path = require("path");
const fs = require("fs");
let { notes } = require("../../db/db.json");

router.get("/api/notes", (req, res) => {
  res.json(notes);
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

router.delete("/api/notes/:id", (req, res) => {
  const deleteById = req.params.id;
  notes = notes.filter((notes) => {
    if (notes.id !== deleteById) {
      return notes;
    }
  });
  fs.writeFile(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify({ notes: notes }, null, 2),
    (err) => {
      if (err) {
        throw new Error(err);
      }
    }
  );

  res.json(notes[parseInt(deleteById)]);
});

module.exports = router;
