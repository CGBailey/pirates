var express = require('express');
var router = express.Router();
var knex = require("../db/knex");

/* GET home page. */
router.get('/pirates', function(req, res, next) {
  console.log(knex);
  knex.select('*').from('pirates').then(function(pirates) {
    res.status(200).json(pirates);
  })
});

router.post('/pirates', function(req, res, next) {
  knex('pirates').insert({req.newPirate}).then(function(pirates) {
    res.redirect('/pirates')
  })
});

module.exports = router;
