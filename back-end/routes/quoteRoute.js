const express = require('express');

const {getAllQuotes, createOneQuote} = require('../controllers/quoteController.js');

const {verifyToken} = require('../middlewares/verifyToken');

const Router = express.Router();

Router.route('/quoteHistory').get(getAllQuotes);

// verify Token first then create quote
// after verifyToken done, next() will go to createOneQuote
Router.route('/fuelQuote').post(verifyToken, createOneQuote);

module.exports = Router;