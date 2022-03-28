using DrawAndGuessV3.Models;

#nullable disable

namespace DrawAndGuessV3.Modules
{
    public class Session
    {

        public string SessionID { get; set; }
        public static List<string> SessionList = new();
        public static List<(string, User)> UserList = new();

        public Session()
        {
            this.SessionID = Generate(10);
        }

        public void AddUser(User user)
        {
            if (user != null)
            {
                UserList.Add((this.SessionID, user));
            }
        }

        private string Generate(int length)
        {
            Random random = new Random();
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length).Select(s => s[random.Next(s.Length)]).ToArray());
        }
    }
}