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
        public string EventUser { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Venue { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public Event()
        {

        }
    }
}
