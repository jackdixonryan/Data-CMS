const express = require('express');
const PORT = 8080 || process.env.PORT;
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const routes = require('./routes');

app.use(express.static("public"));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }));
app.use(routes);

mongoose.connect(process.env.NODE_ENV || 'mongodb://localhost/data_CMS');

//Starting with a post route that will take the file as a req.
app.post('/uploads/document-upload', (req, res) => {
  console.log(req.body.sheet);
});

app.listen(PORT, () => {
  console.log('App listening on PORT', PORT);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/readFile.html'));
});
