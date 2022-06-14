import { Router, Request, Response, NextFunction } from "express";
import { GetPokemonsTypes } from "../controllers/types_controller";

const route = Router();

route.get("/types", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const types = await GetPokemonsTypes.getPokemonAllTypes();
    res.json(types);
  } catch (error) {
    next(error);
  }
});

route.get(
  "/types/:type",
  async (req: Request, res: Response, next: NextFunction) => {
    const pokemonType = req.params.type;
    try {
      const type = await GetPokemonsTypes.getPokemonType(pokemonType);
      res.json(type);
    } catch (error) {
      next(error);
    }
  }
);

export default route;
