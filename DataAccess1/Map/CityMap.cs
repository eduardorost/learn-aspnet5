using Domain.Entities;
using System.Data.Entity.ModelConfiguration;

namespace DataAccess.Map
{
    public class CityMap : EntityTypeConfiguration<City>
    {
        public CityMap()
        {
            ToTable("City");

            HasKey(x => x.CityId);

            Property(c => c.CityName).IsRequired().HasMaxLength(200);
        }
    }
}
