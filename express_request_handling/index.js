const express = require('express');
const app = express();
let names = ['JH', 'Chris', 'Rhys', 'Dale', 'Bob'];


app.get('/', (req, res) => res.send('Hello, my name is Mimi!'));
app.get('/getAll', (req, res) => res.send(names));
app.get('/get/:id', (req, res) => res.send(names[req.params.id]));
app.get('/delete/:id', (req, res) => {
    res.send(names.splice(req.params.id, 1));
});

app.use(express.json());    //Put BEFORE request handling

app.post('/create', (req, res) => {
    const name = req.body.name;
    names.push(name);
    res.status(201).send(`${name} added successfully`);
});

app.post('/replace/:index', (req, res) => {
    const name = req.query.name;
    const index = req.params.index;
    const old = names[index];
    names[index] = name;
    res.status(202).send(`${old} successfully replaced with ${name}`);
});

const server = app.listen(4494, () => console.log('Server successfully started on port $(server.address().port'));