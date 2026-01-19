const express = require('express');
const app = express();
const port = 8000;
const urlRouter = require('./routes/url');

app.use(express.static(__dirname));

app.use('/', urlRouter);

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
    console.log(`http://localhost:${port}/`);
})