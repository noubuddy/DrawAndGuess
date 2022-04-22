using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using DrawAndGuessV3.Models;
using DrawAndGuessV3.Modules;
using System;

namespace DrawAndGuessV3.Pages
{
    public class IndexModel : PageModel
    {
        public IActionResult OnPostSetName()
        {
            // If name is empty, return to main page
            if (string.IsNullOrEmpty(Request.Form["name"]))
                return Redirect("Index");
            
            // else redirect to game page
            HttpContext.Session.SetString("name", Request.Form["name"]);
            return Redirect("Game");
        }
    }
}