let checkLogin = function(req, res, next){
  if(req.isAuthenticated()){
    res.redirect('/api/customer/home');
  }else{
    return next();
  }
}

let checkStillLogin = function(req, res, next){
  console.log("midwhere " + req.session.valid)
  if(req.session.valid){
    return next();
  }else{
    res.redirect('/api/customer/login');
  }
}

module.exports = {
  checkLogin : checkLogin,
  checkStillLogin : checkStillLogin
}
