import axios from "axios";
import { PokeTypes, TypesPagination } from "../interfaces/pokemonTypes";

// Get types or pokemons by types

export class GetPokemonsTypes {
  constructor() {}
  static async getPokemonAllTypes() {
    const endpoint = `https://pokeapi.co/api/v2/type/`;
    return axios.get<TypesPagination>(endpoint).then((res) => res.data.results);
  }
  static async getPokemonType(type: string) {
    const endpoint = `https://pokeapi.co/api/v2/type/${type}`;
    return axios.get<PokeTypes>(endpoint).then((res) => res.data);
  }
}
