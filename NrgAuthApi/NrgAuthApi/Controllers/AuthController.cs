using Microsoft.AspNetCore.Mvc;
using NrgAuthApi.Data;
using NrgAuthApi.Models;

namespace NrgAuthApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        // POST: api/auth/register
        [HttpPost("register")]
        public IActionResult Register([FromBody] User user)
        {
            if (_context.Users.Any(u => u.Email == user.Email))
            {
                return BadRequest("Email already exists!");
            }

            _context.Users.Add(user);
            _context.SaveChanges();
            return Ok(new { message = "Registration successful!" });
        }

        // POST: api/auth/login
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest login)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == login.Email && u.Password == login.Password);
            if (user == null)
                return Unauthorized("Invalid email or password");

            return Ok(new { message = "Login successful!",
                user = new
                {
                    user.FirstName,
                    user.LastName,
                    user.Email
                }
            });
        }

    }
}
