const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
  username: {
    type: String,
    required: true
  },
  googleID: {
    type: String
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