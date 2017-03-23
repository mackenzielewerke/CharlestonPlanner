using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Web.Data
{
    public class EventDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Event> Events { get; set; }
        public DbSet<Permission> Permissions { get; set; }

        //public DbSet<ApplicationUser> Users { get; set; }

        public EventDbContext()
            : base()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            optionsBuilder.UseSqlite(@"Filename=./CharlestonPlanner.db");
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<ApplicationUser>()
                .ForSqliteToTable("Users");
            builder.Entity<IdentityRole>()
                .ForSqliteToTable("Roles");
            builder.Entity<IdentityRoleClaim<string>>()
                .ForSqliteToTable("RoleClaims");
            builder.Entity<IdentityUserClaim<string>>()
                .ForSqliteToTable("UserClaims");
            builder.Entity<IdentityUserLogin<string>>()
                .ForSqliteToTable("UserLogins");
            builder.Entity<IdentityUserRole<string>>()
                .ForSqliteToTable("UserRoles");
            builder.Entity<IdentityUserToken<string>>()
                .ForSqliteToTable("UserTokens");
        }
    }
}
