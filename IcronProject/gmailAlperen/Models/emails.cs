using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace gmailAlperen.Models
{
    public class emails
    {
        [Key]
        public int emailID { get; set; }
        public int readStatus { get; set; }
        public int senderID { get; set; }
        public int reciverID { get; set; }

        
        public string emailContent { get; set; }

        
        public string timeValue { get; set; }





    }
}
