namespace DrawAndGuessV3.Modules
{
    public class Game
    {
        // Test list of words
        public static List<string> Words = new List<string>()
        {
            "apple",
            "banana",
            "orange",
            "pear",
            "grape",
            "strawberry"
        };

        // Randomly select a word from the list
        public static string GetRandomWord()
        {
            Random random = new Random();
            return Words[random.Next(Words.Count)];
        }
    }
}