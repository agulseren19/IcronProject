using System.Linq;
using System.Threading.Tasks;
using mailapi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace mailapi.Controllers
{ 
    [ApiController]
    [Route("api/[controller]")]
    public class UserController:ControllerBase
    {
    private EmailContext _userContext;
public UserController(EmailContext context)
{
 _userContext=context;   
}
 [HttpGet]   // GET /api/user/
    public async Task<ActionResult<User>> Getuser()
    {
    var users = await _userContext.User.ToListAsync();
     if (!users.Any())
    {
        return Ok("Specify user.");
    }
        return Ok(users);
    }

// GET /api/user/2/
    [HttpGet("{id}")]   
    public async Task<ActionResult<User>> Getuser(int id)
    {
    var users = await _userContext.User.FindAsync(id);
        return Ok(users);
    }}}