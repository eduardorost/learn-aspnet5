using System;

namespace Domain.Entities
{
    public class User
    {
        public String UserId { get; set; }
        public String Name { get; set; }
        public String Email { get; set; }
        public virtual String Password { get; set; }
    }
}
