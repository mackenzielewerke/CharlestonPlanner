using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.Collections.Generic;

namespace Application.Web.Data
{
    public class ApplicationUser : IdentityUser
    {
        public List<SavedEvent> SavedEvents { get; set; }

        public ApplicationUser()
        {
            SavedEvents = new List<SavedEvent>();
        }
    }
}