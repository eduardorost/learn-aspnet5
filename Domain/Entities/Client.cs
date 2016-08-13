using System;

namespace Domain.Entities
{
    public class Client
    {
        public Guid ClientId { get; set; }
        public String Name { get; set; }
        public String Phone { get; set; }
        public char? Gender { get; set; }
        public DateTime LastPurchase { get; set; }
        public String Address { get; set; }
        public String Occupation { get; set; }
        public virtual User Seller { get; set; }
        public virtual Region Region { get; set; }
        public virtual Classification Classification { get; set; }
    }
}
