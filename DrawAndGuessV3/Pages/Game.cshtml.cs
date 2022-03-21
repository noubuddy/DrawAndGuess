using DrawAndGuessV3.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DrawAndGuessV3.Pages
{
    public class GameModel : PageModel
    {
        public void OnPost()
        {
            User user = new User();
            user.Name = Request.Form["Name"];

            Console.WriteLine(user.Name);
            //return Redirect("~/Game");
        }
        public void OnGet()
        {
        }
    }
}
