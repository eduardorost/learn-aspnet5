using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace sellseverything.ViewModels
{
    public class FilterCustomersViewModel
    {
        public String UserLoggedId { get; set; }
        public String Name { get; set; }
        public String Gender { get; set; }
        public DateTime? LastPurchase { get; set; }
        public DateTime? Until { get; set; }
        public Guid? CityId { get; set; }
        public Guid? RegionId { get; set; }
        public Guid? ClassificationId { get; set; }
        public Guid? UserId { get; set; }
    }
}
