var user = new signalR.HubConnectionBuilder().withUrl("/userHub").build();

// connectionChat.on("ReceiveMessage", function (user, message) {
//     var li = document.createElement("li");
//     var name = sessionStorage.getItem('name');
//     document.getElementById("userList").appendChild(li);
//     li.textContent = `${name}`;
// });

user.start().then(function () {
    var name = document.getElementById("name").innerHTML;
    var li = document.createElement("li");
    document.getElementById("userList").appendChild(li);
    li.textContent = `${name}`;
    console.log(name);
}).catch(function (err) {
    return console.error(err.toString());
});