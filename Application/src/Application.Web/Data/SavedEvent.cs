using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Web.Data
{
    public class SavedEvent
    {
        public int Id { get; set; }
        public Event Event { get; set; }

        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
    }
}
