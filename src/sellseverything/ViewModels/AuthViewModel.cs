using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace sellseverything.ViewModels
{
    public class AuthViewModel
    {
        [DataType(DataType.EmailAddress)]
        public String Email { get; set; }

        [DataType(DataType.Password)]
        public String Password { get; set; }
    }
}
