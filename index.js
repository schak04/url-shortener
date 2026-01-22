const express = require('express');
const connectToDB = require('./config/db');
const app = express();
const port = 8000;
const urlRouter = require('./routes/url');

app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname));

connectToDB('mongodb://127.0.0.1:27017');

app.use('/', urlRouter);

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
    console.log(`http://localhost:${port}/`);
})