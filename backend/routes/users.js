var express = require('express');
var router = express.Router();
var fs = require('fs');
var cors = require('cors');
router.use(cors())

/* POST Create new user */
router.post('/', function(req, res) {
  fs.readFile('users.json', (err, data)=>{
    if(err)throw err;
    var users = JSON.parse(data)
    var newUser = 
    {
      "userName": req.body.userName,
      "password": req.body.password,
      "email": req.body.email,
      "wantsEmail": req.body.wantsEmail
    }
    users.push(newUser);
    var saveUser = JSON.stringify(users, null, 2);

    fs.writeFile('users.json', saveUser, (err, data)=>{if (err) throw err;})

    res.send("Ny användare skapad!");
    res.send(newUser);
    return;
  })
})


/* POST Log In user */

router.post('/logIn', (req, res) =>{
  fs.readFile('users.json', (err, data) =>{
    if (err) throw err;

    var logInAllowed = false;
    var users = JSON.parse(data);

    for (let i = 0; i < users.length; i++) {
      const user = users[i];

      if(user.password == req.body.password && user.userName == req.body.userName)
      {
        const subscribtionStatus = user.wantsEmail;
        const id = i
        res.send({id , subscribtionStatus})
        return;
      }
    }
    res.send(logInAllowed);
    return;
  })
})

module.exports = router;
