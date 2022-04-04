namespace DrawAndGuessV3.Modules
{
    public class Game
    {
        public static List<string> Words = new List<string>()
        {
            "apple",
            "banana",
            "orange",
            "pear",
            "grape",
            "strawberry"
        };

        public static string GetRandomWord()
        {
            Random random = new Random();
            return Words[random.Next(Words.Count)];
        }
    }
}