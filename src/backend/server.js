const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;  //local host
const dataRouter = require('./routes/data');

app.use('/api/data', dataRouter);
app.use(cors());

app.listen(port, () => {
    console.log("server is now running");
})