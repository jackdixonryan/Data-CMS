const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
  username: {
    type: String,
    required: true
  },
  datasets: [
    { 
      type: Schema.Types.ObjectId,
      ref: 'Dataset'
    }
  ]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;