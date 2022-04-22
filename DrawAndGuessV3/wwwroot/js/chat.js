var connectionChat = new signalR.HubConnectionBuilder().withUrl("/chatHub", {
    skipNegotiation: false
}).build();

//Disable the send button until connection is established.
document.getElementById("sendButton").disabled = true;

connectionChat.on("ReceiveMessage", function (user, message) {
    var li = document.createElement("li");
    document.getElementById("messagesList").appendChild(li);
    li.textContent = `${user} says ${message}`;
});

connectionChat.start().then(function () {
    document.getElementById("sendButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

connectionChat.on('win', () => {
    alert("The word was guessed!");
});

document.getElementById("sendButton").addEventListener("click", function (event) {
    var user = document.getElementById("name").innerHTML;
    var message = document.getElementById("messageInput").value;
    connectionChat.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});