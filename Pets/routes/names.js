const router = require(`express`).Router();

const { nameModel } = require("../db");

let group = ["Luke", "Thom", "Fauzia", "Mimi", "Shakeel", "Michael"];

router.get(`hello`, (req, res) => res.send("Hello,Hello"));

router.get("/getAll", (req, res) => nameModel.find({}).then(results => res.send(results)).catch(err => next(err)));


router.post(`/newName`, async (req, res, next) => {
    if (!req.body.name) return next({ status: 400, message: "Missing Name!" })
    try {
        const result = await nameModel.create(req.body);
        res.status(201).send(result);
    } catch (err) {
        return next(err)
    }
});

router.patch(`/replace/:id`, async (req, res, next) => {
    try {
        await nameModel.findByIdAndUpdate(req.params.id, req.query)
        const newName = await nameModel.findById(req.params.id);
        res.send(newName);
    } catch (err) {
        return next(err);
    }
});


router.delete(`/delete/:id`, (req, res, next) => {
    const { id } = req.params;
    console.log("ID", id);
    nameModel.findByIdAndDelete(id).then(result => res.send(result)).catch(err => next(err));
});

module.exports = router;