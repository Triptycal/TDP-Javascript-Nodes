const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tdp_db",
    function (err) {
        if (err) {
            "errored"
        } else (console.log("Connection Successful")
        )
    });


//makes a new schema
const nameSchema = new mongoose.Schema({
    mood: {
        type: String,
        require: true
    },
    job: String,
    name: {
        type: String,
        require: true

    }
});

//will create a pluralised version

const nameModel = mongoose.model("name", nameSchema); // object with all mongo functions

module.exports = {
    nameModel
}

// sub docs/childschema

// const childSchema = new schema({finerDetails});

// const parentSchema = new mongoose.Schema({
//     children: [childSchema]
// });