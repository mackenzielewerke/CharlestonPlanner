using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Application.Web.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Application.Web.Controllers.api
{
    [Route("~/events")]
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

        [HttpGet]
        [Route("~/api/events")]
        public IEnumerable<Event> GetEvents()
        {
            var userId = _userManager.GetUserId(User);
            return _context.Events.Where(q => q.EventUser == userId).ToList();
        }

        [HttpGet]
        [Route("~/api/events/{id}")]
        public async Task<IActionResult> GetEvent(int id)
        {
            var userId = _userManager.GetUserId(User);
            Event Event = await _context.Events
                .SingleOrDefaultAsync(m => m.EventUser == userId && m.Id == id);

            if (Event == null)
            {
                return NotFound();
            }

            return Ok();
        }

        [HttpPost]
        [Route("~/api/events")]
        public async Task<IActionResult> PostEvent([FromBody]Event events)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            events.EventUser = _userManager.GetUserId(User);
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

            events.EventUser = _userManager.GetUserId(User);
            _context.Entry(events).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }


        [HttpDelete]
        [Route("~/api/events/{id}")]
        public async Task<IActionResult> DeleteEvent(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = _userManager.GetUserId(User);

            Event events = await _context.Events
                .Where(q => q.EventUser == userId)
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
