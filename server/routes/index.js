var express = require('express');
var router = express.Router();
var OAuth = require('oauth');
require('dotenv').config();

var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.CONSUMER_KEY,
    process.env.APPLICATION_SECRET,
    '1.0A',
    null,
    process.env.SECRET_WORD
  );


router.get('/', function(req, res) {

    oauth.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json?count=4',
      process.env.USER_TOKEN, //test user token
      process.env.USER_SECRET, //test user secret
      function (e, data){
        if (e) console.error(e);
        else {
          let dataParse = JSON.parse(data)
          res.send(dataParse)
        }

      });
})

router.post('/update', function(req, res) {
    let twatt = req.body.status
    oauth.post(
      `https://api.twitter.com/1.1/statuses/update.json?status=${twatt}`,
      process.env.USER_TOKEN, //test user token
      process.env.USER_SECRET, //test user secret,
      twatt,
      'text',
      function (e, data){
        if (e) console.error(e);
        else {
          res.send(data)
        }

    });
})



module.exports = router
