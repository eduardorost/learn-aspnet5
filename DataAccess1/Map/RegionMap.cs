using Domain.Entities;
using System;
using System.Data.Entity.ModelConfiguration;

namespace DataAccess.Map
{
    public class RegionMap : EntityTypeConfiguration<Region>
    {
        public RegionMap()
        {
            ToTable("Region");

            HasKey(x => x.RegionId);

            Property(c => c.RegionName).IsRequired().HasMaxLength(200);

            HasRequired(x => x.City)
              .WithRequiredPrincipal();
        }
    }
}
