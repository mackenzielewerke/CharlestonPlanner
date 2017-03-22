using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Application.Web.Data;
using Application.Web.Models;

namespace Application.Web.Controllers
{
    [Authorize]
    public class AccountsController : Controller
    {
        public UserManager<ApplicationUser> _userManager;
        public SignInManager<ApplicationUser> _signInManager;


        public AccountsController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("~/accounts/login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest model)
        {
            var user = await _userManager.FindByEmailAsync(model.Email);
            if (user != null)
            {
                var result = await _signInManager.PasswordSignInAsync(user, model.Password, false, true);


                if (result.Succeeded)
                {
                    return Ok(user);

                }
                else if (result.IsLockedOut)
                {
                    return BadRequest(result);
                }
                else if (result.IsNotAllowed)
                {
                    return BadRequest(result);
                }
                else
                {
                    return BadRequest("Something went wrong. Try again");
                }
            }
            return View(model);
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("~/accounts/register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest model)
        {
            var user = new ApplicationUser();
            user.Email = user.UserName = model.Email;
            user.Signature = Guid.NewGuid();

            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                await _signInManager.PasswordSignInAsync(user, model.Password, false, false);
                return Ok(user);
            }
            else
            {
                return BadRequest("Something went wrong. Try Again");
            }
        }

        //
        // POST: /Account/LogOff
        [HttpPost]
        [Route("~/accounts/logout")]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return Ok();
        }


    }
}
