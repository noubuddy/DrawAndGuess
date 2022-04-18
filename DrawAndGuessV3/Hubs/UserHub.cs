using Microsoft.AspNetCore.SignalR;
using DrawAndGuessV3.Models;
using DrawAndGuessV3.Modules;

namespace SignalRDraw
{
    public class UserHub : Hub
    {
        private readonly static ConnectionMapping<string> _connections = new ConnectionMapping<string>();

        public override Task OnConnectedAsync()
        {
            string name = "User1";

            _connections.Add(name, Context.ConnectionId);

            System.Console.WriteLine($"{Context.ConnectionId} connected");

            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception? exception)
        {
            string name = "User2";

            _connections.Remove(name, Context.ConnectionId);

            System.Console.WriteLine($"{Context.ConnectionId} disconnected");

            return base.OnDisconnectedAsync(exception);
        }

        // public async Task GetUserName()
        // {
        //     await Clients.Caller.SendAsync("GetUserName");
        // }
    }
}
