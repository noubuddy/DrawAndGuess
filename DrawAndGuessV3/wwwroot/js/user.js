var connectionUser = new signalR.HubConnectionBuilder().withUrl("/userHub", {
    skipNegotiation: true
}).build();

connectionUser.start().then(function () {
    console.log("connected!");
}).catch(function (err) {
    return console.error(err.toString());
});

connectionUser.on('Drawer', () => {
    document.getElementById("status").innerHTML = "You are the drawer";
    connectionUser.invoke("StartGame");
});

connectionUser.on('Guesser', () => {
    document.getElementById("status").innerHTML = "You are the guesser";
});

connectionUser.on('startGame', (word) => {
    alert("The word is: " + word);
});

connectionUser.on('win', () => {
    alert("The word was guessed!");
});