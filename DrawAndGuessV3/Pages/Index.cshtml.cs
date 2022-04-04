using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using DrawAndGuessV3.Models;
using DrawAndGuessV3.Modules;
using System;

namespace DrawAndGuessV3.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public IActionResult OnPostSetName()
        {
            User user = new User(Request.Form["Name"]);
            Session session = new Session();

            session.AddUser(user);

            foreach (var us in Session.UserList)
            {
                Console.WriteLine(us.Name.ToString());
            }

            HttpContext.Session.SetString("name", user.Name);
            return Redirect("Game");
        }

        public void OnGet()
        {

        }
    }
}