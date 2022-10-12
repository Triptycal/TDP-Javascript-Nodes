const chai = require("chai"); // assertions

const chaiHttp = require("chai-http"); // http requests

chai.use(chaiHttp); // adds the http plugin

const server = require("../index"); // imports the server so I can send requests to it

const { petModel } = require("../db");

describe("pet tests", () => {

    let testPet;

    beforeEach(async () => {
        try {
            await petModel.deleteMany({});
            testPet = await petModel.create({
                name: "Peaches",
                breed: "Miniature Bull Terrier",
                species: "Dog"
            });
            testPet = JSON.parse(JSON.stringify(testPet));
            console.log();
        } catch(err) {
            console.error(err)
        }
    })



    it("should create a pet", (done) => {
        const newPet = {
            "name": "Fable",
            "breed": "Miniature Bull Terrier",
            "species": "Dog"
        }
        chai.request(server).post("/pets/createPet").send(newPet).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.include(newPet);
            done(); // tells mocha the test has finished
        })
    });

    it("should get a pet", (done) => {
        chai.request(server).get("/pets/getPet/" + testPet._id).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.include(testPet);
            done(); // tells mocha the test has finished
        })
    });

    it("should get all pets", (done) => {
        chai.request(server).get("/pets/getAllPets/").end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.deep.include(testPet);
            done(); // tells mocha the test has finished
        })
    });
})
