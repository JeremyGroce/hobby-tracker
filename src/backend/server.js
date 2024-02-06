const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;  //local host

app.use(cors());

// Sample data
let data = ["sample data"];

// GET request
app.get('/',(req,res) => {
    res.json(data);
})

app.listen(port, () => {
    console.log("server is now running");
})