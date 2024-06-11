import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <h2>Hi, I am Bukola ✨ </h2>
      <p className="Paragraph">
        Welcome to this side of the world wide web where I share my favorite tv
        show with you
      </p>

      <h1>Dark - Streaming on Netflix</h1>

      <img src="src/assets/Dark-Movie-Main-Image.png" alt="Main image" />

      <h2>Overview</h2>

      <p className="Paragraph">
        {" "}
        When two children go missing in a small German town, its sinful past is
        exposed along with the double lives and fractured relationships that
        exist among four families as they search for the kids. The mystery-drama
        series introduces an intricate puzzle filled with twists that includes a
        web of curious characters, all of whom have a connection to the town's
        troubled history -- whether they know it or not. The story includes
        supernatural elements that tie back to the same town in 1986. "Dark"
        represents the first German original series produced for Netflix.
      </p>

      <p>
        <b>Languages:</b> German, German Sign Language <br />
        <b>Composer:</b> Ben Frost
        <br />
        <b>Created by:</b> Baran bo Odar; Jantje Friese <br />
        <b>Executive producers:</b> Justyna Müsch; Jantje Friese; Quirin Berg;
        Max Wiedemann; Abraham Davies <br />
        <b>Opening theme:</b> "Goodbye" by Apparat (featuring Soap&Skin) <br />
        <b>Production company:</b> Wiedemann & Berg Television <br />
        <p>
          Rated <b>8.7/10</b> on IMDB and <b>95%</b> on Rotten Tomatoes
        </p>
        <p>You can find out more about the movie characters </p>
      </p>
      <a href="https://www.youtube.com/watch?v=cq2iTHoLrt0">
        Watch the trailer
      </a>
    </div>
  );
}
