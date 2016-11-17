'use strict'

var mongoose = require('mongoose');

var dataSchema = mongoose.Schema({
    date : Date,
    frequency : Number,
    customer : {
      type: Schema.Types.ObjectId,
      ref: 'customers'
    }
},{
  timestamps:true
});

module.exports  = mongoose.model('datas', dataSchema);
// module.exports  = mongoose.model('[nama collection di database]', customerSchema);
