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
    console.log(req.body);
    var newData = datas({
      date: req.body.date_input,
      frequency: req.body.frequency_input,
      customer: "582d58f3eeb659294fc9ff8d"
      // customer: req.body.customer_id
    });

    // save the data
    newData.save(function(err, data) {
      if (err) throw err;
      res.json(data)
    });
  },
  // find one data
  findOneData : function(req, res, next){
    console.log("data masuk " + req.params.id);
    datas.findOne({ _id : req.params.id }, function(err, data) {
      if (err) throw err;
      console.log(data);
      res.json(data);
    });
  },
  // delete one data
  deleteData : function(req, res, next){
    datas.findOneAndRemove({ _id: req.body.data_id }, function(err, data) {
      if (err) throw err;
      res.json(data);
    });
  },
  // edit data
  editData : function(req, res, next){
    console.log(req.body);
    datas.findOneAndUpdate({ _id: req.body.edit_id }, { date: req.body.edit_date, frequency: req.body.edit_frequency  }, { new : true }, function(err, data) {
      if (err) throw err;

      // we have the updated user returned to us
      res.json(data)

    });
  },
  formData : function(req, res, next){
    res.render('formData');
  }

}
