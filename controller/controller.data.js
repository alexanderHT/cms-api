const datas = require('../models/model.data');

module.exports = {

  // get all data from database
  getAllData : function(req, res, next){
    datas.find({},function(err, data){
      res.json(data);
    })
  },
  // insert new data
  insertData : function(req, res, next){
    var newData = datas({
      date: req.body.date_input,
      frequency: req.body.frequency,
      customer: req.body.customer_id
    });

    // save the data
    newData.save(function(err, data) {
      if (err) throw err;
      res.json(data)
    });
  },
  // find one data
  findOneData : function(req, res, next){
    datas.find({ _id = req.body.data_id }, function(err, data) {
      if (err) throw err;

      res.json(data)
    });
  },
  // delete one data
  deleteData : function(req, res, next){
    User.findOneAndRemove({ _id: req.body.data_id }, function(err, data) {
      if (err) throw err;

      res.json(data);

    });
  },
  // edit data
  editData : function(req, res, next){
    User.findOneAndUpdate({ _id: req.body.data_id }, { date: req.body.date_input, frequency: req.body.frequency  }, function(err, data) {
      if (err) throw err;

      // we have the updated user returned to us
      res.json(data)

    });
  },
  formData : function(req, res, next){
    res.render('formData');
  }

}
