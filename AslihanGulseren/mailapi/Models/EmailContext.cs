using Microsoft.EntityFrameworkCore;

namespace mailapi.Models
{
    public class EmailContext:DbContext
    {
     public EmailContext(DbContextOptions <EmailContext> options):base(options)
    {
        
    }
        public DbSet<Email> Email {get;set;}
        public DbSet<User> User {get;set;}

    }
}