using Microsoft.AspNetCore.SignalR;
using DrawAndGuessV3.Modules;

namespace SignalRDraw
{
#nullable disable
    public class UserHub : Hub
    {
        private readonly static ConnectionMapping<string> _connections = new ConnectionMapping<string>();

        public override Task OnConnectedAsync()
        {
            string name = Context.GetHttpContext().Session.GetString("name");

            _connections.Add(name, Context.ConnectionId);

            System.Console.WriteLine($"{name} connected - {Context.ConnectionId}");

            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            string name = Context.GetHttpContext().Session.GetString("name");

            _connections.Remove(name, Context.ConnectionId);

            System.Console.WriteLine($"{name} disconnected - {Context.ConnectionId}");

            return base.OnDisconnectedAsync(exception);
        }
    }
}
