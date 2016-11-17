'use strict'

var express = require('express');
var router = express.Router();
const controllerCustomer = require('../controller/controller.customer');
const controllerData = require('../controller/controller.data');
const passport = require('passport');
const middleware = require('../helper/middleware');

/* customer / user */
router.get('/customer', middleware.checkStillLogin, controllerCustomer.getAllCustomer);
router.post('/customer', controllerCustomer.registerCustomer);
router.get('/customer/register', controllerCustomer.formRegisterCustomer);
router.get('/customer/login', middleware.checkLogin, controllerCustomer.formLogin);
router.post('/customer/login', passport.authenticate('local', {failureRedirect : '/api/customer/login'}) , controllerCustomer.login);
router.get('/customer/logout', controllerCustomer.logout);
router.get('/customer/home', middleware.checkStillLogin ,controllerCustomer.home);

/* data */
router.get('/data', middleware.checkStillLogin, controllerData.getAllData);
router.post('/data', middleware.checkStillLogin, controllerData.insertData);
router.get('/data/formData', middleware.checkStillLogin, controllerData.formData);
router.get('/data/:id', middleware.checkStillLogin, controllerData.findOneData);
router.delete('/data', middleware.checkStillLogin, controllerData.deleteData);
router.put('/data', middleware.checkStillLogin, controllerData.editData);





module.exports = router;
