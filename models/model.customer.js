'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const passportLocalMongoose = require('passport-local-mongoose');

var customerSchema = mongoose.Schema({
    username : String,
    email : String,
    Phone : String,
    provider : String
},{
  timestamps:true
});

// use plugin mongoose
customerSchema.plugin(passportLocalMongoose);

module.exports  = mongoose.model('customers', customerSchema);
// module.exports  = mongoose.model('[nama collection di database]', customerSchema);
