using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace gmailAlperen.Models
{
    public class users
    {
        [Key]
        public int userID { get; set; }

       
        public string firstName { get; set; }

   
        public string lastName { get; set; }

   
        public string email { get; set; }







    }
}
