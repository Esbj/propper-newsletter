const userList = document.getElementById("users");
const emailArea = document.getElementById("emails");



fetch("http://localhost:3002/admin/userNames")
    .then(response => response.json())
    .then(function (users) {
        users.forEach(user => {
            userList.insertAdjacentHTML("beforeend"," <li>" + user + "</li>")
        });
    })

fetch("http://localhost:3002/admin/email")
    .then(response => response.json())
    .then(function (email){
        emailList = email.toString()
        emailArea.insertAdjacentHTML("beforeend", emailList)
    })