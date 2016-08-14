using Domain.Entities;
using System.Data.Entity.ModelConfiguration;

namespace DataAccess.Map
{
    public class ClientMap : EntityTypeConfiguration<Client>
    {
        public ClientMap()
        {
            ToTable("Client");

            HasKey(x => x.ClientId);

            Property(c => c.Name).IsRequired().HasMaxLength(200);
            Property(c => c.Phone).IsRequired().HasMaxLength(100);
            Property(c => c.Gender).IsOptional();
            Property(c => c.LastPurchase).IsOptional();
            Property(c => c.Address).IsOptional();
            Property(c => c.Occupation).IsOptional();
            Property(c => c.SellerId);

            //HasRequired(x => x.Seller)
            //.WithRequiredPrincipal();
            HasRequired(x => x.Region)
              .WithOptional();
            HasRequired(x => x.Classification)
              .WithOptional();
        }
    }
}
