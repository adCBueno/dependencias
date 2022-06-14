import { IPokemon } from "./pokemon";

export interface IPokemonTypes {
  name: string;
  pokemon: IPokemon;
}
interface Result {
  name: string;
  url: string;
}

export interface TypesPagination {
  count: number;
  next: null | string;
  previous: null | string;
  results: Result[];
}

export class PokeTypes implements IPokemonTypes {
  name: string;
  pokemon: IPokemon;

  constructor(name: string, pokemon: IPokemon) {
    this.name = name;
    this.pokemon = pokemon;
  }
}
