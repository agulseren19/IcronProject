using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gmailAlperen.Models
{
    public class usersContext : DbContext
    {
        public usersContext(DbContextOptions<usersContext> options) : base(options)
        {

        }

        public DbSet<users> users { get; set; }

    }
}
