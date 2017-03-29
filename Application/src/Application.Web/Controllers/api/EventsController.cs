using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Application.Web.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace Application.Web.Controllers.api
{
    public class EventsController : Controller
    {

        private readonly EventDbContext _context;

        private UserManager<ApplicationUser> _userManager { get; set; }

        public EventsController(UserManager<ApplicationUser> userManager, EventDbContext context)
        {
            _userManager = userManager;
            _context = context;

        }

        [Route("~/api/events")]
        public IActionResult Events()
        {
            return View();
        }

        [HttpGet("~/api/events")]
        public IEnumerable<Event> GetEvents()
        {
            //var userId = _userManager.GetUserId(User);
            var sortEvent = _context.Events.OrderBy(q => q.Date);
            
            return sortEvent;

        }


        [Authorize]
        [HttpPost("~/api/events/{id}/save")]
        public async Task<IActionResult> SaveEvent(int id)
       {
            var @event = _context.Events.Find(id);

            if(@event == null)
            {
                return NotFound();
            }

            var savedEvent = new SavedEvent();
            savedEvent.Event = @event;

            var user = await _userManager.GetUserAsync(User);

            user.SavedEvents.Add(savedEvent);

            await _userManager.UpdateAsync(user);

            return Ok(savedEvent);
        }

        [Authorize]
        [HttpGet("~/api/events/saves")]
        public async Task<IActionResult> GetUserEvents()
        {
            var userId = _userManager.GetUserId(User);
            var savedEvents = _context.SavedEvents.Include(s => s.Event).Where(s => s.UserId == userId).ToList();
           // var user = _context.Users.Include(q => q.SavedEvents.Select(r => r.Event)).FirstOrDefault(m => m.Id == userId);
            
           
            return Ok(savedEvents);
                
        }

        [HttpGet("~/api/events/{id}")]
        public async Task<IActionResult> GetEvent(int id)
        {

            Event Event = await _context.Events
                .SingleOrDefaultAsync(m => m.Id == id);

            if (Event == null)
            {
                return NotFound();
            }
            Event.EventUser = _userManager.GetUserId(User);


            return Ok(Event);
        }

        [HttpPost("~/api/events")]
        public async Task<IActionResult> PostEvent([FromBody]Event events)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Events.Add(events);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEvent", new { id = events.Id }, events);
        }

        [HttpPut("~/api/events/{id}")]
        public async Task<IActionResult> PutEvents(int id, [FromBody] Event events)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != events.Id)
            {
                return BadRequest(Response);
            }

            //events.EventUser = _userManager.GetUserId(User);
            _context.Entry(events).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }


        [HttpDelete("~/api/events/{id}")]
        public async Task<IActionResult> DeleteEvent(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = _userManager.GetUserId(User);

            Event events = await _context.Events
                //.Where(q => q.EventUser == userId)
                .SingleOrDefaultAsync(m => m.Id == id);

            if (events == null)
            {
                return NotFound();
            }

            _context.Events.Remove(events);
            await _context.SaveChangesAsync();

            return Ok(events);
        }

    }
}
