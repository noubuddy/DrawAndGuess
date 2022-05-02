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

        public override Task OnConnectedAsync()
        {
            string name = Context.GetHttpContext().Session.GetString("name");

            ConnectionMapper.Users.Add(new User { Name = name, ConnectionId = Context.ConnectionId });

            System.Console.WriteLine($"{name} connected - {Context.ConnectionId}");

            Clients.All.SendAsync("ClearUsers");
            foreach (var user in ConnectionMapper.Users)
            {
                Clients.All.SendAsync("ShowUsers", user.Name);
            }

            System.Console.WriteLine($"{ConnectionMapper.Users.Count} users connected");
            System.Console.WriteLine();

            // Clients.All.SendAsync("ReceiveMessage");

            // if (ConnectionMapper.Users.Count >= 2)
            //     StartGame();

            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            string name = Context.GetHttpContext().Session.GetString("name");

            ConnectionMapper.Users.RemoveAll(x => x.ConnectionId == Context.ConnectionId);

            System.Console.WriteLine($"{name} disconnected - {Context.ConnectionId}");

            Clients.All.SendAsync("ClearUsers");
            foreach (var user in ConnectionMapper.Users)
            {
                Clients.All.SendAsync("ShowUsers", user.Name);
            }

            System.Console.WriteLine($"{ConnectionMapper.Users.Count} users connected");
            System.Console.WriteLine();


            return base.OnDisconnectedAsync(exception);
        }

        public async Task GenerateRandomWord()
        {
            string word = Game.GetRandomWord();
            randomWord = word;
            System.Console.WriteLine($"Random word 1: {word}");
            await Clients.Client(randomUser).SendAsync("StartGame", word);
        }

        private void StartGame()
        {
            System.Console.WriteLine("Game has been started");

            string randomConnectionId = ConnectionMapper.GetRandomConnectionId();
            System.Console.WriteLine($"Random connection id: {randomConnectionId}");
            randomUser = randomConnectionId;

            Clients.Client(randomConnectionId).SendAsync("Drawer");
            Clients.AllExcept(randomConnectionId).SendAsync("Guesser");
            Clients.All.SendAsync("GameStarted");

        }
    }
}
