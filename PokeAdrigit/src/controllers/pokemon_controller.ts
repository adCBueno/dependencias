import axios from "axios";
import { IPokemon, PokemonsPagination } from "../interfaces/pokemon";

// Get pokemon

export class GetPokemons {
  constructor() {}
  static getAllPokemons() {
    const endpoint = `https://pokeapi.co/api/v2/pokemon`;
    return axios
      .get<PokemonsPagination>(endpoint)
      .then((res) => res.data.results);
  }
  static getPokemon(name: string) {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${name}`;
    return axios.get<IPokemon>(endpoint).then((res) => res.data);
  }
}
