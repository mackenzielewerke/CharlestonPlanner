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
            //builder.Entity<Permission>()
            //    .HasKey(t => new { t.UserId, t.EventId });

            //builder.Entity<Permission>()
            //    .HasOne(pt => pt.User)
            //    .WithMany(p => p.Permissions)
            //    .HasForeignKey(pt => pt.Id);

            //builder.Entity<Permission>()
            //    .HasOne(pt => pt.Event)
            //    .WithMany(t => t.Permissions)
            //    .HasForeignKey(pt => pt.EventId);


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
