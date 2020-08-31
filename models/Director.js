const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DirectorSchema = new Schema({
  name : String,
  surname : String,
  bio : String,
  created_at: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('director', DirectorSchema);