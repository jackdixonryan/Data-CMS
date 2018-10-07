const express = require('express');
const PORT = 8080 || process.env.PORT;
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static("public"));
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }));
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