using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Web.Data
{
    public class Permission
    {
        public int Id { get; set; }
       // public int UserId { get; set; }
       // public int EventId { get; set; }
        public virtual Event Event {get; set;} 
        public virtual ApplicationUser User { get; set; }


    }
}
