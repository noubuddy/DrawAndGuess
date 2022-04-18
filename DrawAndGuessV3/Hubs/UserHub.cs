using Microsoft.AspNetCore.SignalR;
using DrawAndGuessV3.Models;
using DrawAndGuessV3.Modules;

namespace SignalRDraw
{
    public class UserHub : Hub
    {
        static List<User> Users = new List<User>();

        public override Task OnConnectedAsync()
        {
            System.Console.WriteLine("User connected: " + Context.ConnectionId.ToString());
            return Groups.AddToGroupAsync(Context.ConnectionId, "room");
        }

        public Task OnDisconnectedAsync()
        {
            System.Console.WriteLine("User disconnected: " + Context.ConnectionId.ToString());
            return Groups.RemoveFromGroupAsync(Context.ConnectionId, "room");
        }

        public async Task AddUser(string name)
        {
            Users.Add(new User { Name = name });
            foreach (var user in Users)
            {
                System.Console.WriteLine(user.Name);
            }
            System.Console.WriteLine("----------------");
            await Clients.All.SendAsync("user", name);
        }
    }
}
