var connection = new signalR.HubConnectionBuilder().withUrl("/userHub").build();

connection.on('user', function (name) {
    var name = document.getElementById("name").innerHTML;
    var li = document.createElement("li");
    document.getElementById("userList").appendChild(li);
    li.textContent = `${name}`;
});

connection.start().then(function () {
    connection.invoke("AddUser", document.getElementById("name").innerHTML);
}).catch(function (err) {
    return console.error(err.toString());
});