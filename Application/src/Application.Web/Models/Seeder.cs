using Application.Web.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;

//CITATION: Seeder method is from http://thedatafarm.com/uncategorized/seeding-ef-with-json-data/

namespace Application.Web.Models
{
    public static class Seeder
    {
        public static void Seedit(string jsonData, IServiceProvider services)
        {
            List<Event> events = JsonConvert.DeserializeObject<List<Event>>(jsonData);
            using (var context = services.GetRequiredService<EventDbContext>())
            {
                context.Database.EnsureDeleted();
                context.Database.Migrate();

                if (!context.Events.Any())
                {
                    context.AddRange(events);

                    context.SaveChanges();
                }
            }

        }
    }
}
