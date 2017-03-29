using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace Application.Web.Data
{
    public class ApplicationUser : IdentityUser
    {
        public virtual List<SavedEvent> SavedEvents { get; set; }
        public Guid Signature { get; set; }

        public ApplicationUser()
        {
            SavedEvents = new List<SavedEvent>();
        }
    }
}