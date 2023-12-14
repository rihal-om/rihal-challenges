using Microsoft.EntityFrameworkCore;
using RihalChallengeApp.Models;
using System;
using System.Linq;

namespace RihalChallengeApp.Context
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Class> Classes { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Country> Countries { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Seed data for Country
            modelBuilder.Entity<Country>().HasData(
                new Country { Id = 1, Name = "Country1" },
                new Country { Id = 2, Name = "Country2" }
            );

            // Seed data for Class
            modelBuilder.Entity<Class>().HasData(
                new Class { Id = 1, ClassName = "Class1" },
                new Class { Id = 2, ClassName = "Class2" }
            );

            // Seed data for Student
            modelBuilder.Entity<Student>().HasData(
                new Student { Id = 1, Name = "Student1", ClassId = 1, CountryId = 1, DateOfBirth = DateTime.Now },
                new Student { Id = 2, Name = "Student2", ClassId = 2, CountryId = 2, DateOfBirth = DateTime.Now }
            );

            base.OnModelCreating(modelBuilder);
        }

        public override int SaveChanges()
        {
            var entries = ChangeTracker
                .Entries()
                .Where(e => e.Entity is BaseEntity && (
                        e.State == EntityState.Added
                        || e.State == EntityState.Modified));

            foreach (var entityEntry in entries)
            {
                ((BaseEntity)entityEntry.Entity).ModifiedDate = DateTime.Now;

                if (entityEntry.State == EntityState.Added)
                {
                    ((BaseEntity)entityEntry.Entity).CreatedDate = DateTime.Now;
                }
            }

            return base.SaveChanges();
        }
    }
}
