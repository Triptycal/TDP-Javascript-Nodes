const express = require('express');
const app = express();
let pets = ['Wednesday', 'Thistle', 'Rhodes', 'Agatha', 'Lorelei','Lusamine','Dawn','Jessie'];


app.get('/', (req, res) => res.send('Hello, welsome to my list of my pets!'));
app.get('/getAll', (req, res) => res.send(pets));
app.get('/get/:id', (req, res) => res.send(pets[req.params.id]));
app.get('/delete/:id', (req, res) => {
    res.send(pets.splice(req.params.id, 1));
});

app.use(express.json());    //Put BEFORE request handling

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
app.post('/create', (req, res) => {
    const pets = req.body.pets;
    names.push(pets);
    res.status(201).send(`${pets} added successfully`);
});

app.post('/replace/:index', (req, res) => {
    const npets = req.query.pets;
    const index = req.params.index;
    const old = petNames[index];
    petNames[index] = pets;
    res.status(202).send(`${old} successfully replaced with ${pets}`);
});

const server = app.listen(4494, () => console.log('Server successfully started on port $(server.address().port'));