const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.User
      .find()
      .populate('datasets')
      .then(model => res.json(model))
      .catch(err => res.status(422).json(err));
  },
  addDataset: (req, res) => {
    db.Dataset.create(req.body)
    .then(dbDataset => {
      console.log(dbDataset);
      console.log('ID:', req.params.id)
      return db.User.findOneAndUpdate({_id: req.params.id}, {$push: { datasets: dbDataset._id } }, {new: true})
    })
    .then(dbUser => {
      console.log(dbUser);
      res.json(dbUser)
    })
    .catch(err => res.status(422).json(err));
  },
  newUser: (req, res) => {
    db.User
      .create(req.body)
      .then(model => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findDatasets: (req, res) => {
    db.User
      .findById(req.params.id)
      .populate('datasets')
      .then(result => {
        const found = [];
        for (let i = 0; i < result.datasets.length; i++) {
          if (result.datasets.name === req.params.name) {
            found.push(result.datasets);
          }
        }
        res.json(found);
      })
      .catch(err => res.status(422).json(err));
  }
}