const express = require('express');
const app = express();
const port = 3001;  //local host

// routes
// ----

app.listen(port, () => {
    console.log("server is now running");
})