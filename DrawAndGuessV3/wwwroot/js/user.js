var connectionUser = new signalR.HubconnectionUserBuilder().withUrl("/userHub").build();

connectionUser.on('user', function (name) {
    var name = document.getElementById("name").innerHTML;
    var li = document.createElement("li");
    document.getElementById("userList").appendChild(li);
    li.textContent = `${name}`;
});

connectionUser.start().then(function () {
    connectionUser.invoke("AddUser", document.getElementById("name").innerHTML);
}).catch(function (err) {
    return console.error(err.toString());
});