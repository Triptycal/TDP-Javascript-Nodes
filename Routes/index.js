const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const petRoutes = require("./routes/pets");

app.use(bodyParser.json());

// app.use - adds a piece of middleware to the chain
app.use((req, res, next) => {
    const logEntry = `host: ${req.host}
    ip: ${req.ip}
    method: ${req.method}
    path: ${req.path}
    time: ${new Date()}`;
    console.log(logEntry);
    next();
});



app.get('/', (req, res) =>  {
    res.send('Hello, world!');
});

app.use("/pets", petRoutes);


app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.message || "oops");
})
const server = app.listen(4494, () => console.log(`Server successfully started on port ${server.address().port}`));
