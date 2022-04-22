using Microsoft.AspNetCore.SignalR;
using DrawAndGuessV3.Modules;
using DrawAndGuessV3.Models;

namespace SignalRDraw
{
#nullable disable
    public class UserHub : Hub
    {
        private static string randomUser;
        public static string randomWord;
        // private readonly static ConnectionMapping<string> _connections = new ConnectionMapping<string>();

        public override Task OnConnectedAsync()
        {
            string name = Context.GetHttpContext().Session.GetString("name");

            ConnectionMapper.Users.Add(new User { Name = name, ConnectionId = Context.ConnectionId });

            System.Console.WriteLine($"{name} connected - {Context.ConnectionId}");

            if (ConnectionMapper.Users.Count >= 2)
            {
                System.Console.WriteLine("Game has been started");

                string randomConnectionId = ConnectionMapper.GetRandomConnectionId();
                System.Console.WriteLine($"Random connection id: {randomConnectionId}");
                randomUser = randomConnectionId;

                Clients.Client(randomConnectionId).SendAsync("Drawer");
                Clients.AllExcept(randomConnectionId).SendAsync("Guesser");
                Clients.All.SendAsync("GameStarted");
            }

            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            string name = Context.GetHttpContext().Session.GetString("name");

            ConnectionMapper.Users.Add(new User { Name = name, ConnectionId = Context.ConnectionId });

            System.Console.WriteLine($"{name} disconnected - {Context.ConnectionId}");

            return base.OnDisconnectedAsync(exception);
        }

        public async Task StartGame()
        {
            string word = Game.GetRandomWord();
            randomWord = word;
            System.Console.WriteLine($"Random word 1: {word}");
            await Clients.Client(randomUser).SendAsync("startGame", word);
        }


    }
}
