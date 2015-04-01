'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  title: String,
  info: String,
  description: String,
  imag:String,
  active: Boolean
});

module.exports = mongoose.model('Project', ProjectSchema);