const express = require("express");

const app = express ();

const bodyParser = require("body-parser")

app.use(bodyParser.json());

const route = require(`./routes/names.js`);

app.use(route);


app.use(express.json());

const server = app.listen(1207,() => {console.log(`server has started succesfully on port number ${server.address().port}`)});

module.exports=server


