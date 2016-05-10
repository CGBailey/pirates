var express = require('express');
var router = express.Router();
var knex = require("../db/knex");

/* GET home page. */
router.get('/pirates', function(req, res, next) {
  console.log(knex);
  knex.select('*').from('pirates').then(function(pirates) {
    console.log(pirates);
    res.status(200).json(pirates);
  })
});

router.post('/pirates', function(req, res, next) {
  // console.log(knex);
  // knex.select('*').from('pirates').then(function(pirates) {
  //   console.log(pirates);
  //   res.status(200).json(pirates);
  // })
});

module.exports = router;
