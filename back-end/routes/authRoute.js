
const {register} = require('../controllers/authController')

const express = require('express');

const Router = express.Router();

Router.route('/register').post(register);

module.exports = Router;