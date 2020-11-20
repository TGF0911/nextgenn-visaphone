const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 300
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 12
  }
})

module.exports = mongoose.model('User', UserSchema)