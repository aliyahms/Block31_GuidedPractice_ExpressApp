//We import the express package to use its libary
const express = require("express");

// We call it to create the Express app
const app = express();

// We initialize the PORT variable. Common port number is 3000
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("You've reached the Playlist API!");
});

// We import the playlist array to access it's data
const playlist = require("./playlist");

// This is the middle ware to hadle the GET  /playlist endpoint
app.get("/playlist", (req, res) => {
  res.json(playlist);
});

// This is the middleware to handle the GET /playlist:index endpoint. It will return an "error" message with status code 404

app.get("/playlist/:index", (req, res) => {
  const { index } = req.params;
  if (index < 0 || index >= playlist.length) {
    res.status(404).send("That song does not exist in the playlist.");
  } else {
    res.json(playlist[index]);
  }
});

// This is always at the end of the script! App starts to listen here.
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
