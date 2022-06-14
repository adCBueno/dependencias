import express from "express";
import pokemonRoute from "../src/routes/pokemon_route";
import pokemonTypeRoute from "../src/routes/pockemon-type_route";

const app = express();

const PORT = process.env.PORT || 8000;

app.use("/api", pokemonRoute, pokemonTypeRoute);

app.get("/", function (req, res) {
  res.send("Hello World");
});

const server = app.listen(PORT, () =>
  console.log(`app is running on http://localhost:${PORT}`)
);

export default server;
