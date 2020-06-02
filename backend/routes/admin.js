var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET All users*/
router.get('/', function(req, res, next) {
  fs.readFile('users.json', (err, data) =>{
    if (err) throw err;
    var users = JSON.parse(data);
    res.send(users);
  })
});
/* GET email where wantsEmail === true */
router.get('/email', function(req, res, next) {
  fs.readFile('users.json', (err, data) =>{
    if (err) throw err;
    var users = JSON.parse(data);
    var subscribers = []
    //if the user wants email, add them to a seperate collection
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if(user.wantsEmail == true){
        subscribers.push(user.email)
      }
    }
    emailAdresses = subscribers.join(",").toString();
    console.log(emailAdresses);
    res.send(emailAdresses)
  })
});

module.exports = router;