using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using gmailAlperen.Models;

namespace gmailAlperen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class emailsController : ControllerBase
    {
        private readonly emailsContext _context;

        public emailsController(emailsContext context)
        {
            _context = context;
        }

        // GET: api/emails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<emails>>> Getemails()
        {
            return await _context.emails.ToListAsync();
        }

        // GET: api/emails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<emails>> Getemails(int id)
        {
            var emails = await _context.emails.FindAsync(id);

            if (emails == null)
            {
                return NotFound();
            }

            return emails;
        }

        // PUT: api/emails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Putemails(int id, emails emails)
        {
            if (id != emails.emailID)
            {
                return BadRequest();
            }

            _context.Entry(emails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!emailsExists(id))
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

        // POST: api/emails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<emails>> Postemails(emails emails)
        {
            _context.emails.Add(emails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getemails", new { id = emails.emailID }, emails);
        }

        // DELETE: api/emails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deleteemails(int id)
        {
            var emails = await _context.emails.FindAsync(id);
            if (emails == null)
            {
                return NotFound();
            }

            _context.emails.Remove(emails);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool emailsExists(int id)
        {
            return _context.emails.Any(e => e.emailID == id);
        }
    }
}
