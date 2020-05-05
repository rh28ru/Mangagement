var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req,res,next){
  res.send('You requested /api')
});

router.get('/customers', function(req, res, next) {
  res.send( [{
    id: 1,
    image:'https://placeimg.com/64/64/1',
    name:'탁성길',
    birthday:'960307',
    gender:'남자',
    job:'대학생'
  },{
    id: 2,
    image:'https://placeimg.com/64/64/2',
    name:'황경진',
    birthday:'850205',
    gender:'남자',
    job:'대학생'
  },{
  id: 3,
  image:'https://placeimg.com/64/64/3',
  name:'리훈',
  birthday:'750208',
  gender:'남자',
  job:'대학생'
  }]);
});

module.exports = router;
