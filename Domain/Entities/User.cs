using System;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class User
    {
        public Guid UserId { get; set; }
        public String Name { get; set; }
        public String Email { get; set; }
        public virtual String Password { get; set; }
    }
}
