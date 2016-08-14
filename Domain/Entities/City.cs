using System;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class City
    {
        public Guid CityId { get; set; }
        public String CityName { get; set; }
        public virtual ICollection<Region> Regions { get; set; }
    }
}
