import { expect } from "chai";
import { PokeItem } from "../../src/interfaces/pokemon";

describe("PokeItem", () => {
  it("Pokemon gets correct values", () => {
    const id = 25;
    const name = "pikachu";
    const order = 1;
    const abilities = ["Fire", "Lightning"];
    const base_experience = 112;
    const height = 3;
    const weight = 50;

    const pokemonInstance = new PokeItem(
      id,
      name,
      order,
      abilities,
      base_experience,
      height,
      weight
    );
    expect(pokemonInstance.id).to.equal(id);
    expect(pokemonInstance.name).to.equal(name);
    expect(pokemonInstance.order).to.equal(order);
    expect(pokemonInstance.abilities).to.equal(abilities);
    expect(pokemonInstance.base_experience).to.equal(base_experience);
    expect(pokemonInstance.height).to.equal(height);
    expect(pokemonInstance.weight).to.equal(weight);
  });
});

describe("Pokemon Item Details", () => {
  it("Sets initial values correclty.", () => {
    let dato = [
      {
        abilities: [
          {
            ability: {
              name: "limber",
              url: "https://pokeapi.co/api/v2/ability/7/",
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: "imposter",
              url: "https://pokeapi.co/api/v2/ability/150/",
            },
            is_hidden: true,
            slot: 3,
          },
        ],
        base_experience: 101,
        forms: [
          {
            name: "ditto",
            url: "https://pokeapi.co/api/v2/pokemon-form/132/",
          },
        ],
        height: 3,
        moves: [
          {
            move: {
              name: "transform",
              url: "https://pokeapi.co/api/v2/move/144/",
            },
          },
        ],
        name: "ditto",
        types: [
          {
            slot: 1,
            type: {
              name: "normal",
              url: "https://pokeapi.co/api/v2/type/1/",
            },
          },
        ],
        weight: 40,
      },
    ];

    const pokemon = Object.assign(
      new PokeItem(1, "pikachu", 5, ["fire"], 5, 2, 3),
      dato
    );
    expect(pokemon).to.have.property("abilities");
    expect(pokemon).to.have.property("abilities").not.be.empty;

    expect(pokemon.base_experience).to.be.above(0);
    expect(pokemon.height).to.be.above(0);

    expect(pokemon).to.have.property("base_experience");

    expect(pokemon.name).not.be.empty;

    expect(pokemon.weight).to.be.above(0);
  });
});
