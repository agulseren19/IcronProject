namespace mailapi.Models
{
    public class Email
    {
        public int Id { get; set; }
        public int Status { get; set; }
        public System.DateTime Time { get; set; }
        public int SenderId { get; set; }
        public int ReceiverId { get; set; }
    }
}