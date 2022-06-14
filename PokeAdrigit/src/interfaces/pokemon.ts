export interface IPokemon {
  id: number;
  name: string;
  order: number;
  abilities: string[];
  base_experience: number;
  height: number;
  weight: number;
}
interface Result {
  name: string;
  url: string;
}
export interface PokemonsPagination {
  count: number;
  next: null | string;
  previous: null | string;
  results: Result[];
}

export class PokeItem implements IPokemon {
  id: number;
  name: string;
  order: number;
  abilities: string[];
  base_experience: number;
  height: number;
  weight: number;

  constructor(
    id: number,
    name: string,
    order: number,
    abilities: string[],
    base_experience: number,
    height: number,
    weight: number
  ) {
    this.id = id;
    this.name = name;
    this.order = order;
    this.abilities = abilities;
    this.base_experience = base_experience;
    this.height = height;
    this.weight = weight;
  }

  printData(): void {
    console.log("<<< POKEMON INFO >>>\n", JSON.stringify(PokeItem, null, 2));
  }
}
