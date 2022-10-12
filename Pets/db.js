const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tdp_db",
    function (err) {
        if (err) {
            "errored"
        } else (console.log("Connection Successful")
        )
    });


//makes a new schema
const petSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    breed: String,
    species: {
        type: String,
        require: true

    }
});

//will create a pluralised version

const petModel = mongoose.model("pet", petSchema); // object with all mongo functions

module.exports = {
    petModel
}

// sub docs/childschema

// const childSchema = new schema({finerDetails});

// const parentSchema = new mongoose.Schema({
//     children: [childSchema]
// });
