const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express()
const port = 8000;
const corsOpts = {};

app.use(cors(corsOpts));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Backend says hi!');
});

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});