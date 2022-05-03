var connectionChat = new signalR.HubConnectionBuilder()
  .withUrl("/chatHub", {
    skipNegotiation: false,
  })
  .build();

//Disable the send button until connection is established.
// document.getElementById("sendButton").disabled = true;

// connectionChat.on("ReceiveMessage", function (user, message) {
//     var li = document.createElement("li");
//     document.getElementById("messagesList").appendChild(li);
//     li.textContent = `${user} says ${message}`;
// });

connectionChat.start().then(function () {
}).catch(function (err) {
    return console.error(err.toString());
});

// connectionChat.on('win', () => {
//     alert("The word was guessed!");
// });

// document.getElementById("sendButton").addEventListener("click", function (event) {
//     var user = document.getElementById("name").innerHTML;
//     var message = document.getElementById("messageInput").value;
//     connectionChat.invoke("SendMessage", user, message).catch(function (err) {
//         return console.error(err.toString());
//     });
//     event.preventDefault();
// });

/* chatbox */
var messages = [],
  lastUserMessage = "";

connectionChat.on("ReceiveMessage", function (message) {
  messages.push(message);

  for (var i = 1; i < 1000; i++) {
    if (messages[messages.length - i])
      document.getElementById("chatlog" + i).innerHTML =
        messages[messages.length - i];
  }
});

function newEntry() {}

document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = x.keyCode || x.which;
  if (key === 13 || key === 3) {
    //runs this function when enter is pressed

    if (document.getElementById("chatbox").value !== "") {
      lastUserMessage = document.getElementById("chatbox").value;
      document.getElementById("chatbox").value = "";
      var username = document.getElementById("name").innerHTML;
      var message = username + ": " + lastUserMessage;
      console.log(message);
      connectionChat.invoke("SendMessage", message);
    }
  }
}
