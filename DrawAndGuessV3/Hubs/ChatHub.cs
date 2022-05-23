using Microsoft.AspNetCore.SignalR;

namespace SignalRDraw
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", message);
            // System.Console.WriteLine($"Message: {message}");
            // System.Console.WriteLine($"Random word 2: {UserHub.randomWord}");

            message = message.Split(' ')[1];

            System.Console.WriteLine($"Message: {message}");
            System.Console.WriteLine($"Random word 2: {UserHub.randomWord}");

            if (message == UserHub.randomWord)
            {
                System.Console.WriteLine("Test");
                await Clients.All.SendAsync("win");
            }

            // await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}
