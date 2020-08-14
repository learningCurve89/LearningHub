using Data.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace Data
{
    public class BloggingContext : DbContext
    {
        public DbSet<Post> Posts { get; set; }
        public BloggingContext(DbContextOptions<BloggingContext> options) : base(options) { }

        public BloggingContext()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlServer("Server=DESKTOP-K0I2OQR;Database=BloggingDb;Integrated Security=True;TrustServerCertificate=False;");

    }

}
