using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gmailAlperen.Models
{
    public class emailsContext : DbContext
    {

        public emailsContext(DbContextOptions<emailsContext> options) : base(options)
        {

        }

        public DbSet<emails> emails { get; set; }
    }
}
