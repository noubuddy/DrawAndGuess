using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using DrawAndGuessV3.Models;

namespace DrawAndGuessV3.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public IActionResult OnPost()
        {
            User user = new User();
            user.Name = Request.Form["Name"];

            return Redirect("~/Game");
        }

        public void OnGet()
        {

        }
    }
}