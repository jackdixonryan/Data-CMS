const express = require('express');
const PORT = 8080 || process.env.PORT;
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes');
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');

app.use(express.static(__dirname + "/public"));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }));
app.use(routes);
app.set('view engine', 'ejs');


mongoose.connect(keys.mongodb.dbURI, {useNewUrlParser: true }, () => {
  console.log('success in connecting to the database.')
});

//Starting with a post route that will take the file as a req. Don't touch. very fragile..
app.post('/uploads/document-upload', (req, res) => {
  console.log(req.body.sheet);
});

app.listen(PORT, () => {
  console.log('App listening on PORT', PORT);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/main.html'));
});

app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, './public/readFile.html'));
})

