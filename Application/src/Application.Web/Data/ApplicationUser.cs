using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace Application.Web.Data
{
    public class ApplicationUser : IdentityUser
    {
        public List<Permission> Permissions { get; set; }
        public Guid Signature { get; set; }

        public ApplicationUser()
        {
            Permissions = new List<Permission>();
        }
    }
}