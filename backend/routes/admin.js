var express = require('express');
var router = express.Router();
var fs = require('fs');
var cors = require('cors');
router.use(cors());

/*GET Usernames for all users */
router.get('/userNames', function (req, res) {
  fs.readFile('users.json', (err, user) => {
    if (err) throw err;
    var user = JSON.parse(user);

    var userNames = []
    for (let i = 0; i < user.length; i++) {
      userNames.push(user[i].userName)
    }
    res.send(userNames)
    return;
  })
});


/* GET email where wantsEmail === true */
router.get('/email', (req, res) =>{
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
    res.send(subscribers)
    return
  })
});

module.exports = router;