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
    public class PermissionsController : Controller
    {
        private readonly EventDbContext _context;

        private UserManager<ApplicationUser> _userManager { get; set; }

        public PermissionsController(UserManager<ApplicationUser> userManager, EventDbContext context)
        {
            _userManager = userManager;
            _context = context;

        }

        [Route("~/api/permissions")]
        public IActionResult Permission()
        {
            return View();
        }

        [HttpGet]
        [Route("~/api/permissions/{id}")]
        public IEnumerable<Permission> GetEvents(int id)
        {
            var userId = _userManager.GetUserId(User);
            return _context.Permissions.Where(q => q.UserId == id).ToList();
        }

        [HttpGet]
        [Route("~/api/permissions/{id}")]
        public async Task<IActionResult> GetEvent(int id)
        {
            var @event = await _context.Permissions.SingleOrDefaultAsync(m => m.EventId == m.Id && m.UserId == id);

            if (@event == null)
            {
                return NotFound();
            }

            return Ok();
        }

        [HttpDelete]
        [Route("~/api/permissions/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = _userManager.GetUserId(User);

            var @event = await _context.Permissions
                .Where(q => q.UserId == id)
                .SingleOrDefaultAsync(m => m.EventId == m.Id);

            if (@event == null)
            {
                return NotFound();
            }

            _context.Permissions.Remove(@event);
            await _context.SaveChangesAsync();

            return Ok(@event);
        }
    }
}
