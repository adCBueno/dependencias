import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../src";
const should = chai.should();

chai.use(chaiHttp);

describe("TEST GET - URI = /api/pokemons", function () {
  it("GET - /api/pokemons/{name} - Retrieve all Pokemons - should retrun 200", function (done) {
    const pokemonName = "bulbasaur";
    chai
      .request(server)
      .get(`/api/pokemons`)
      .end((err, response) => {
        response.status.should.equal(200);

        done();
      });
  });

  it("GET - /api/pokemon/{name} - Retrieve all Pkemon - should retrun an array of pokemons", function (done) {
    chai
      .request(server)
      .get(`/api/pokemons`)
      .end((err, response) => {
        const pokemons = response.body;
        pokemons.should.be.an("array");
        pokemons[0].should.have.property("name");
        pokemons[0].should.have.property("url");

        done();
      });
  });
});

describe("TEST GET - URI = /api/pokemons/{name}", function () {
  it("GET - /api/pokemons/{name} - Retrieve Pkemon by name - should retrun 200", function (done) {
    const pokemonName = "bulbasaur";
    chai
      .request(server)
      .get(`/api/pokemons/${pokemonName}`)
      .end((err, response) => {
        response.status.should.equal(200);

        done();
      });
  });

  it("GET - /api/pokemon/{name} - Retrieve Pkemon by name - should retrun pokemon", function (done) {
    const pokemonName = "bulbasaur";
    chai
      .request(server)
      .get(`/api/pokemons/${pokemonName}`)
      .end((err, response) => {
        const pokemon = response.body;
        pokemon.should.have.property("id");
        pokemon.should.have.property("name");
        pokemon.should.have.property("order");
        pokemon.should.have.property("abilities");
        pokemon.should.have.property("base_experience");
        pokemon.should.have.property("height");
        pokemon.should.have.property("weight");

        done();
      });
  });
});
