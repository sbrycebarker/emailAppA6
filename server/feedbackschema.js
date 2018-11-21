var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var feedbackSchema = new Schema({
  first_name: {type: String},
  last_name: {type: String},
  email: {type: String},
  subject: {type: String},
  message: {type: String}
})

module.exports = mongoose.model('Feedback', feedbackSchema);
