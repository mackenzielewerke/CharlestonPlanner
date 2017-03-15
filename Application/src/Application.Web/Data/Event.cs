using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;


namespace Application.Web.Data
{
    public class Event
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Venue { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public List<SavedEvent> SavedEvents { get; set; }
        public Event()
        {
            SavedEvents = new List<SavedEvent>();
        }
    }
}
