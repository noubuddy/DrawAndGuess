var connectionChat = new signalR.HubConnectionBuilder()
  .withUrl("/chatHub", {
    skipNegotiation: false,
  })
  .build();

connectionChat.start().then(function () {
}).catch(function (err) {
    return console.error(err.toString());
});

var messages = [];
// var lastUserMessage = "";

connectionChat.on("ReceiveMessage", function (message) {
  messages.push(message);

  for (var i = 1; i < 1000; i++) {
    if (messages[messages.length - i])
      document.getElementById("chatlog" + i).innerHTML =
        messages[messages.length - i];
  }
});

connectionChat.on("win", () => {
  alert("The word was guessed!");
});

document.onkeypress = keyPress;
function keyPress(e) {
  var x = e || window.event;
  var key = x.keyCode || x.which;
  if (key === 13 || key === 3) {
    //runs this function when enter is pressed

    if (document.getElementById("chatbox").value !== "") {
      var lastUserMessage = document.getElementById("chatbox").value;
      var username = document.getElementById("name").innerHTML;
      var message = username + ": " + lastUserMessage;
      connectionChat.invoke("SendMessage", message);
    }
  }
}
