var connectionUser = new signalR.HubConnectionBuilder().withUrl("/userHub", {
    skipNegotiation: false
}).build();

connectionUser.start().then(function () {
    console.log("connected!");
}).catch(function (err) {
    return console.error(err.toString());
});

connectionUser.on('ClearUsers', () => {
    document.getElementById("players").innerHTML = "";
});

connectionUser.on('ShowUsers', (user) => {
    list = document.getElementById("players");
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(user));
    list.appendChild(entry);
});

connectionUser.on('Drawer', () => {
    document.getElementById("status").innerHTML = "You are the drawer";
    connectionUser.invoke("GenerateRandomWord");
});

connectionUser.on('Guesser', () => {
    document.getElementById("status").innerHTML = "You are the guesser";
});

connectionUser.on('StartGame', (word) => {
    alert("The word is: " + word);
});

connectionUser.on('win', () => {
    alert("The word was guessed!");
});