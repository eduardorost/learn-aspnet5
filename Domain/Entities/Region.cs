using System;

namespace Domain.Entities
{
    public class Region
    {
        public Guid RegionId { get; set; }
        public String RegionName { get; set; }
        public virtual Guid CityId { get; set; }
        public virtual City City { get; set; }
    }
}
