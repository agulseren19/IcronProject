using System.Linq;
using System.Threading.Tasks;
using mailapi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace mailapi.Controllers
{ 
    [ApiController]
    [Route("api/[controller]")]
    public class EmailController:ControllerBase
    {
    private EmailContext _emailContext;
public EmailController(EmailContext context)
{
 _emailContext=context;   
}
 [HttpGet]   // GET /api/2
    public async Task<ActionResult<Email>> GetEmail()
    {
    var emails = await _emailContext.Email.ToListAsync();
     if (!emails.Any())
    {
        return Ok("Specify user.");
    }
        return Ok(emails);
    }


    [HttpGet("{id}")]   
    public async Task<ActionResult<Email>> GetEmail(int id)
    {
    var emails = await _emailContext.Email.Where(e=>(e.SenderId==id||e.ReceiverId==id)).ToListAsync();
     if (!emails.Any())
    {
        return Ok("This user does not have a mail.");
    }
        return Ok(emails);
    }
      [HttpGet("{id}/sent")]   
    public async Task<ActionResult<Email>> GetEmailSent(int id)
    {
    var emails = await _emailContext.Email.Where(e=>(e.SenderId==id)).ToListAsync();
     if (!emails.Any())
    {
        return Ok("This user does not have a mail.");
    }
        return Ok(emails);
    }
          [HttpGet("{id}/received")]  

     public async Task<ActionResult<Email>> GetEmailReceived(int id)
    {
    var emails = await _emailContext.Email.Where(e=>(e.ReceiverId==id)).ToListAsync();
     if (!emails.Any())
    {
        return Ok("This user does not have a mail.");
    }
        return Ok(emails);
    }


//create
// POST: api/Email
[HttpPost]
public async Task<ActionResult<Email>> PostEmail(Email email)
{
    _emailContext.Email.Add(email);
    await _emailContext.SaveChangesAsync();

    //return CreatedAtAction("GetTodoItem", new { id = todoItem.Id }, todoItem);
    return CreatedAtAction(nameof(GetEmail), email);
} 
//modifies
// PUT: api/Email/5
[HttpPut("{id}")]
public async Task<IActionResult> PutTodoItem(int id, Email email)
{
    if (id != email.Id)
    {
        return BadRequest();
    }

    _emailContext.Entry(email).State = EntityState.Modified;

    try
    {
        await _emailContext.SaveChangesAsync();
    }
    catch (DbUpdateConcurrencyException)
    {
        if (!EmailExists(id))
        {
            return NotFound();
        }
        else
        {
            throw;
        }
    }

    return NoContent();
}
private bool EmailExists(int id) =>
     _emailContext.Email.Any(e => e.Id == id);

// DELETE: api/Email/5
[HttpDelete("{id}")]
public async Task<IActionResult> DeleteEmail(int id)
{
    var email = await _emailContext.Email.FindAsync(id);
    if (email == null)
    {
        return NotFound();
    }
    _emailContext.Email.Remove(email);
    await _emailContext.SaveChangesAsync();

    return NoContent();
}
/*
 [HttpGet]   // GET /api/test2
    public IActionResult GetEmail()
    {
        var emails=_emailContext.Email.ToList();
        return Ok(emails);
    }
// GET: api/Email/5
[HttpGet("{id}")]
public async Task<ActionResult<Email>> GetEmail(int id)
{
    var email = await _emailContext.Email.FindAsync(id);

    if (email == null)
    {
        return NotFound();
    }

    return email;
}

//create
// POST: api/Email
[HttpPost]
public async Task<ActionResult<Email>> PostEmail(Email email)
{
    _emailContext.Email.Add(email);
    await _emailContext.SaveChangesAsync();

    //return CreatedAtAction("GetTodoItem", new { id = todoItem.Id }, todoItem);
    return CreatedAtAction(nameof(GetEmail), email);
} 
//modifies
// PUT: api/Email/5
[HttpPut("{id}")]
public async Task<IActionResult> PutTodoItem(int id, Email email)
{
    if (id != email.Id)
    {
        return BadRequest();
    }

    _emailContext.Entry(email).State = EntityState.Modified;

    try
    {
        await _emailContext.SaveChangesAsync();
    }
    catch (DbUpdateConcurrencyException)
    {
        if (!EmailExists(id))
        {
            return NotFound();
        }
        else
        {
            throw;
        }
    }

    return NoContent();
}
private bool EmailExists(int id) =>
     _emailContext.Email.Any(e => e.Id == id);

// DELETE: api/Email/5
[HttpDelete("{id}")]
public async Task<IActionResult> DeleteEmail(int id)
{
    var email = await _emailContext.Email.FindAsync(id);
    if (email == null)
    {
        return NotFound();
    }
    _emailContext.Email.Remove(email);
    await _emailContext.SaveChangesAsync();

    return NoContent();
} */

    }
    
}