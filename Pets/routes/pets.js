const router = require(`express`).Router();

const { nameModel } = require("../db");

//let group = ["Luke", "Thom", "Fauzia", "Mimi", "Shakeel", "Michael"];

router.get(`hello`, (req, res) => res.send("Hello,Hello"));

router.get("/getAll", (req, res) => petModel.find({}).then(results => res.send(results)).catch(err => next(err)));


router.post(`/newPet`, async (req, res, next) => {
    if (!req.body.name) return next({ status: 400, message: "Missing Name!" })
    try {
        const result = await petModel.create(req.body);
        res.status(201).send(result);
    } catch (err) {
        return next(err)
    }
});

router.patch(`/replace/:id`, async (req, res, next) => {
    try {
        await petModel.findByIdAndUpdate(req.params.id, req.query)
        const newPet = await petModel.findById(req.params.id);
        res.send(newPet);
    } catch (err) {
        return next(err);
    }
});


router.delete(`/delete/:id`, (req, res, next) => {
    const { id } = req.params;
    console.log("ID", id);
    petModel.findByIdAndDelete(id).then(result => res.send(result)).catch(err => next(err));
});

module.exports = router;
