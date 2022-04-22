using System.Collections;
using DrawAndGuessV3.Models;

namespace DrawAndGuessV3.Modules
{
    public class ConnectionMapper
    {
        public static List<User> Users = new List<User>();

        public static void Add(string name, string connectionId)
        {
            Users.Add(new User { Name = name, ConnectionId = connectionId });
        }

        public static void RemoveByName(string name)
        {
            var user = Users.FirstOrDefault(u => u.Name == name);
            if (user != null)
            {
                Users.Remove(user);
            }
        }

        public static void RemoveByConnectionId(string connectionId)
        {
            var user = Users.FirstOrDefault(u => u.ConnectionId == connectionId);
            if (user != null)
            {
                Users.Remove(user);
            }
        }

        public static string GetConnectionIdByName(string name)
        {
            var user = Users.FirstOrDefault(u => u.Name == name);
            if (user != null)
            {
                return user.ConnectionId;
            }
            return null;
        }

        public static string GetNameByConnectionId(string connectionId)
        {
            var user = Users.FirstOrDefault(u => u.ConnectionId == connectionId);
            if (user != null)
            {
                return user.Name;
            }
            return null;
        }

        public static int Count()
        {
            return Users.Count;
        }

        public static IEnumerable GetConnections()
        {
            return Users.Select(u => u.ConnectionId);
        }

        public static string GetRandomConnectionId()
        {
            var random = new Random();
            var index = random.Next(Users.Count);
            var i = 0;
            foreach (var connection in Users)
            {
                if (i == index)
                {
                    return connection.ConnectionId;
                }
                i++;
            }
            return null;
        }
    }
}