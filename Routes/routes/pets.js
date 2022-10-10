const router = require("express").Router();
//    {name: "Wednesday", species: "Dog"},
//{name: "Thistle", species: "Dog"},
//{name: "Rhodes", species: "Dog"},
//{name: "Agatha", species: "Rat"},
//{name: "Lorelei", species: "Rat"},
//{name: "Lusamine", species: "Rat"},
//{name: "Dawn", species: "Rat"},
//{name: "Jessie", species: "Rat"}
const pets = [
    {name: "Wednesday", species: "Dog"},
    {name: "Thistle", species: "Dog"},
    {name: "Rhodes", species: "Dog"},
    {name: "Agatha", species: "Rat"},
    {name: "Lorelei", species: "Rat"},
    {name: "Lusamine", species: "Rat"},
    {name: "Dawn", species: "Rat"},
    {name: "Jessie", species: "Rat"}
];


router.get("/getAllPets", (req, res) => res.send(pets));


router.get("/getPet/:id", (req, res, next) => {
    const {id} = req.params;
    if (!pets[id]) return next("No pet there");
    res.send(pets[id])
});

const deleteMiddleware = (req, res, next) => {
    console.log("You're trying to DELETE A PET? YOU MONSTER!!!");
    next();
}

router.post("/createPet", (req, res, next) => {
    if (!req.body.name) return next({ status: 400, message: "Missing name"})
    pets.push(req.body);
    res.status(201).send(`${pets} added successfully`);
});

router.post('/replace/:index', (req, res) => {
    const npets = req.query.pets;
    const index = req.params.index;
    const old = petNames[index];
    petNames[index] = pets;
    res.status(202).send(`${old} successfully replaced with ${pets}`);
});

router.patch("/updatePet/:id", (req, res) => {
    console.log("ID:", req.params.id);
    console.log("QUERY:", req.query);
    res.send();
})

router.delete("/removePet/:id", deleteMiddleware, (req, res, next) => {
    const {id}  = req.params;
    console.log("ID:", id);
    if (id > pets.length) return next({ status: 404, message: `No pet found with id ${id}`});
    res.send(pets.splice(id));
});


module.exports = router;
