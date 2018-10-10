const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DataSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  data: JSON
});

const Dataset = mongoose.model('Dataset', DataSchema);

module.exports = Dataset;