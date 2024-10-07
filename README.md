# Guided Practice - Playlist

In this guided practice, we'll use Express to create a simple API that serves information about a playlist of songs.

## Getting Started

1. Create a new repository using this one as a template.
2. Clone down your repository and run `npm install` to install the dependencies.
3. Start the development server with `npm run dev`.

## Setting Up Express

1. In `server.js`, import the `"express"` package and call it to create the Express app.
   <details>
   <summary>See solution</summary>

   ```js
   const express = require("express");
   const app = express();
   ```

   </details>

2. Initialize a `PORT` variable to 3000, which is a common default port that local servers listen on.
   <details>
   <summary>See solution</summary>

   ```js
   const PORT = 3000;
   ```

   </details>

3. Write middleware to handle the `GET /` endpoint. It should respond with the message `"You've reached the Playlist API!"`.
   <details>
   <summary>See solution</summary>

   ```js
   app.get("/", (req, res) => {
     res.send("You've reached the Playlist API!");
   });
   ```

   </details>

4. Tell the app to listen on `PORT`. A corresponding status message should be logged to the console, which you should see if your development server is running.
   <details>
   <summary>See solution</summary>

   ```js
   app.listen(PORT, () => {
     console.log(`Listening on port ${PORT}.`);
   });
   ```

   </details>

5. Use the REST Client Extension to test the `GET /` endpoint in `playlist.http`. If you've done everything correctly, the server should respond with the correct message!

## Serving Playlist

1. An array of songs has already been initialized in `playlist.js`. At the bottom of that file, add a line to export that array.
   <details>
   <summary>See solution</summary>

   ```js
   module.exports = playlist;
   ```

   </details>

2. Back in `server.js`, import that array using `require`. Now that our server has access to this data, we can use it in our responses.
   <details>
   <summary>See solution</summary>

   ```js
   const playlist = require("./playlist");
   ```

   </details>

3. Write middleware to handle the `GET /playlist` endpoint. It should respond with the `playlist` array as JSON. Use `playlist.http` to test this endpoint.
   <details>
   <summary>See solution</summary>

   ```js
   app.get("/playlist", (req, res) => {
     res.json(playlist);
   });
   ```

   </details>

4. Write middleware to handle the `GET /playlist/:index` endpoint. It should respond with the song at the given `index` of the `playlist` array. If the index is invalid, it should send the message `"That song does not exist in the playlist."` with status code 404. Use `playlist.http` to test this endpoint.
   <details>
   <summary>See solution</summary>

   ```js
   app.get("/playlist/:index", (req, res) => {
     const { index } = req.params;
     if (index < 0 || index >= playlist.length) {
       res.status(404).send("That song does not exist in the playlist.");
     } else {
       res.json(playlist[index]);
     }
   });
   ```

   </details>

## Solution

To view the full solution, switch over to the `solution` branch of this starter repository.
