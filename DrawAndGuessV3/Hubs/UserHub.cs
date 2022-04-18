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
            Console.WriteLine("User connected: " + Context.ConnectionId.ToString());
            return Groups.AddToGroupAsync(Context.ConnectionId, "room");
        }

        public Task OnDisconnectedAsync()
        {
            Console.WriteLine("User disconnected: " + Context.ConnectionId.ToString());
            return Groups.RemoveFromGroupAsync(Context.ConnectionId, "room");
        }

        public async Task AddUser(string name)
        {
            Users.Add(new User { Name = name });
            foreach (var user in Users)
            {
                Console.WriteLine(user.Name);
            }
            Console.WriteLine("----------------");
            await Clients.All.SendAsync("user", name);
        }
    }
}
