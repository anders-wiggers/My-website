'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const dev = process.env.NODE_DEV !== 'production'; //true false
const mongoose = require('mongoose');

const projectRoute = require('./api/project');

//const db = mongoose.connect('mongodb://localhost:27017/Photos');

let app = express();

app.use(express.static('public'));
app.use(projectRoute);

app.listen(PORT, () => console.info(`server has started on ${PORT}`));
