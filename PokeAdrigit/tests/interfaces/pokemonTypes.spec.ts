import { expect } from "chai";
import { PokeTypes } from "../../src/interfaces/pokemonTypes";
import {IPokemon} from "../../src/interfaces/pokemon"

// Para agrupar una serie de test
describe('PokeTypes', ()=>{
    const pokemon = {id: 12, name: "pikachu", order: 12, abilities: ["ligh", "Fire"], base_experience: 23, height: 3, weight: 4};
    
    //Para definir un unit test en particular
    it('Pokemon gets correct values', ()=>{        
        const name = "rock";
        const pokemonType = pokemon;
        
        
            // Confirm pokemonInstance keep correct data with the values send
            const pokemonInstance = new PokeTypes(name, pokemon);
            expect(pokemonInstance.name).to.equal(name);
            expect(pokemonInstance.pokemon).to.equal(pokemon);
         });

});

/////////

describe("Pokemon Type Details", () => {

   
    it("Sets initial values correclty.", () => {
        
        const pokeinfo = {
        "id": 1,
        "name": "pikachu",
        "order": 4,
        "abilities": ["fire"],
        "base_experience": 5,   
        "height": 3,
        "weight": 2 }

        const pokemon = Object.assign(new PokeTypes("rock",pokeinfo));
        expect(pokemon).to.have.property("name");
    });
   

});