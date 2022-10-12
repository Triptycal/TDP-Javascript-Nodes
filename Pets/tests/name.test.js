const chai = require ("chai");
const chaiHttp = require ("chai-Http");

chai.use(chaiHttp);

const server = require ("../index");
const {petModel} = require ("../db");
const { eventPets } = require("../index");

describe ("group tests", () => {
    let testGroup;

    beforeEach(async () => {
        try {
            await petModel.deleteMany({});
            testGroup = await petModel.create({
                name: "Peaches",
                breed: "MBT",
                species: "Dog"
            });
            testGroup = JSON.parse(JSON.stringify(testGroup));
            console.log();
        }catch (err) {
            console.error(err)
        }
})

it("should add a pet to the group", (done) => {
    const newPet = {
        name: "Fable",
        breed: "MBT",
        species: "dog"
    }
    chai.request(server).post("/pets/newPet").send(newPet).end((err,res)=> {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(201);
        chai.expect(res.body).to.include(newPet);
        done();
    })
})

it("should get a pet", (done) => {
    chai.request(server).get("/pets/getAll" + testGroup._id).end((err,res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.include(testGroup);
        done();
    })
})
});
