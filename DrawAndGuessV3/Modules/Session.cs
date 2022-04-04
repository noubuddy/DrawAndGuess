using DrawAndGuessV3.Models;

#nullable disable

namespace DrawAndGuessV3.Modules
{
    public class Session
    {
        public static List<User> UserList = new();

        public Session()
        {
        }

        public void AddUser(User user)
        {
            if (user != null)
                UserList.Add(user);
        }

        public static void RemoveUser(User user)
        {
            if (user != null)
                UserList.Remove(user);
        }

        public static void ClearUsers()
        {
            UserList.Clear();
        }

        public static string GetRandomUser()
        {
            Random random = new Random();
            return UserList[random.Next(UserList.Count)].Name.ToString();
        }

        private string Generate(int length)
        {
            Random random = new Random();
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length).Select(s => s[random.Next(s.Length)]).ToArray());
        }
    }
}