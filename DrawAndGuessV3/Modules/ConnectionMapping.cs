namespace DrawAndGuessV3.Modules
{
#nullable disable
    public class ConnectionMapping<T>
    {
        private readonly Dictionary<T, HashSet<string>> _connections = new();

        public int Count
        {
            get
            {
                return _connections.Count;
            }
        }

        public string GetValue(T key)
        {
            if (_connections.TryGetValue(key, out var value))
            {
                return value.FirstOrDefault();
            }

            return null;
        }

        public string GetRandomConnectionId()
        {
            var random = new Random();
            var index = random.Next(_connections.Count);
            var i = 0;
            foreach (var connection in _connections)
            {
                if (i == index)
                {
                    return connection.Value.First();
                }
                i++;
            }
            return null;
        }

        public void Add(T key, string connectionId)
        {
            lock (_connections)
            {
                HashSet<string> connections;
                if (!_connections.TryGetValue(key, out connections))
                {
                    connections = new HashSet<string>();
                    _connections.Add(key, connections);
                }

                lock (connections)
                {
                    connections.Add(connectionId);
                }
            }
        }

        public IEnumerable<string> GetConnections(T key)
        {
            HashSet<string> connections;
            if (_connections.TryGetValue(key, out connections))
            {
                return connections;
            }

            return Enumerable.Empty<string>();
        }

        public void Remove(T key, string connectionId)
        {
            lock (_connections)
            {
                HashSet<string> connections;
                if (!_connections.TryGetValue(key, out connections))
                {
                    return;
                }

                lock (connections)
                {
                    connections.Remove(connectionId);

                    if (connections.Count == 0)
                    {
                        _connections.Remove(key);
                    }
                }
            }
        }
    }
}