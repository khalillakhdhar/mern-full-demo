const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  Nom: {
    type: String,
    required: true
  },
  Cin: {
    type: String,
    required: true
  },
  adresse: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: true

  },
 
});

module.exports = User = mongoose.model('User', UserSchema);
