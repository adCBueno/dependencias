import { Router, Request, Response, NextFunction } from "express";
import { GetPokemons } from "../controllers/pokemon_controller";

const route = Router();

route.get(
  "/pokemons",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const pokemons = await GetPokemons.getAllPokemons();
      res.json(pokemons);
    } catch (error) {
      next(error);
    }
  }
);

route.get(
  "/pokemons/:name",
  async (req: Request, res: Response, next: NextFunction) => {
    const pokemonName = req.params.name;
    try {
      const pokemon = await GetPokemons.getPokemon(pokemonName);
      res.json(pokemon);
    } catch (error) {
      next(error);
    }
  }
);

export default route;
