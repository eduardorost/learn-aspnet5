using System;

namespace Domain.Entities
{
    public class Region
    {
        public String RegionId { get; set; }
        public String RegionName { get; set; }
        public virtual City City { get; set; }
    }
}
