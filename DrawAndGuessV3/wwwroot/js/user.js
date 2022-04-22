var connectionUser = new signalR.HubConnectionBuilder().withUrl("/userHub").build();

connectionUser.start().then(function () {
    // Some code here
}).catch(function (err) {
    return console.error(err.toString());
});