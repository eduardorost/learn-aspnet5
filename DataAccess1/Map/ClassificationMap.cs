using Domain.Entities;
using System;
using System.Data.Entity.ModelConfiguration;

namespace DataAccess.Map
{
    public class ClassificationMap : EntityTypeConfiguration<Classification>
    {
        public ClassificationMap()
        {
            ToTable("Classification");

            HasKey(x => x.ClassificationId);

            Property(c => c.ClassificationName).IsOptional().HasMaxLength(100);
        }
    }
}
