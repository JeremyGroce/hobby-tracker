const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3001;  //local host

app.use(cors());

app.use(express.json());

// get static files
app.use(express.static(path.join(__dirname, 'src')));

// Serve static files from the 'src/img' directory under the '/images' URL prefix
app.use('/img', express.static(path.join(__dirname, '..', 'img')));

// Core data saved and shown everyday
let data = [
    {title: 'Code', desc: 'for an hour', image: 'img/computer.png'},
    {title: 'Read', desc: 'at least 30 mins', image: 'img/books.png'},
    {title: 'Lift', desc: 'do my regular routine', image: 'img/workout.png'}

];

// instances where the hobby was checked (done by the user) 
let checkedData = [
    {
        date: 'MM-DD-YYYY', 
        title: 'Code',
        desc: 'for an hour',
        image: '/img/computer.png',
        check: true
    }
];

// GET request
app.get('/',(req,res) => {
    res.json(data);
})

// POST request
app.post('/create',(req,res) => {
    const newData = req.body;

    data.push(newData);
    res.status(201).json({message: 'Data created'});

})

app.listen(port, () => {
    console.log("server is now running");
})