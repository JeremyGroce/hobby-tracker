const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;  //local host

app.use(cors());

// Sample data
let data = [
    {title: 'Code', desc: 'for an hour', image: '../img/computer.png'},
    {title: 'Read', desc: 'at least 30 mins', image: '../img/books.png'},
    {title: 'Lift', desc: 'do my regular routine', image: '/src/img/workout.png'}

];

// GET request
app.get('/',(req,res) => {
    res.json(data);
})

app.listen(port, () => {
    console.log("server is now running");
})