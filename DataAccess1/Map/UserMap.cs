using Domain.Entities;
using System.Data.Entity.ModelConfiguration;

namespace DataAccess.Map
{
    public class UserMap : EntityTypeConfiguration<User>
    {
        public UserMap()
        {
            ToTable("User");

            HasKey(x => x.UserId);

            Property(c => c.Name).IsRequired().HasMaxLength(200);
            Property(c => c.Email).IsRequired().HasMaxLength(100);
            Property(c => c.Password).IsRequired().HasMaxLength(255);
        }
    }
}
