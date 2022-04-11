using Microsoft.AspNetCore.SignalR;
using DrawAndGuessV3.Models;
using DrawAndGuessV3.Modules;

namespace SignalRDraw
{
    public class UserHub : Hub
    {
        static List<User> Users = new List<User>();

        public async Task AddUser(string name)
        {
            Users.Add(new User { Name = name });
            foreach (var user in Users) {
                System.Console.WriteLine(user.Name);
            }
            System.Console.WriteLine("----------------");
            await Clients.All.SendAsync("user", name);
        }
    }
}
