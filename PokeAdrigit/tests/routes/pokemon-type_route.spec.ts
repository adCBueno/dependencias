import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../src";
const should = chai.should();

chai.use(chaiHttp);

describe("TEST GET - URI = /api/types", function () {
  it("GET - /api/type - Retrieve All Types  - should retrun 200", function (done) {
    chai
      .request(server)
      .get(`/api/types`)
      .end((err, response) => {
        response.status.should.equal(200);

        done();
      });
  });

  it("GET - /api/type - Retrieve all Types - should retrun an array pokemon types", function (done) {
    chai
      .request(server)
      .get(`/api/types`)
      .end((err, response) => {
        const types = response.body;
        types.should.be.an("array");
        types[0].should.have.property("name");
        types[0].should.have.property("url");

        done();
      });
  });
});

describe("TEST GET - URI = /api/types", function () {
  it("GET - /api/type/{type} - Retrieve Type by name - should retrun 200", function (done) {
    const pokemonType = "ground";
    chai
      .request(server)
      .get(`/api/types/${pokemonType}`)
      .end((err, response) => {
        response.status.should.equal(200);

        done();
      });
  });

  it("GET - /api/type/{type} - Retrieve Type by name - should retrun pokemon type", function (done) {
    const pokemonType = "ground";
    chai
      .request(server)
      .get(`/api/types/${pokemonType}`)
      .end((err, response) => {
        const type = response.body;
        type.should.have.property("name");
        type.name.should.equal(pokemonType);
        type.should.have.property("damage_relations");
        type.should.have.property("game_indices");
        type.should.have.property("generation");
        type.should.have.property("move_damage_class");
        type.should.have.property("moves");
        type.should.have.property("names");
        type.should.have.property("pokemon");
        const pokemon = type.pokemon;
        pokemon.should.be.an("array");
        pokemon[0].pokemon.should.have.property("name");
        pokemon[0].pokemon.should.have.property("url");

        done();
      });
  });
});
