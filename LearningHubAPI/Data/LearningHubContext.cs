using Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Data
{
    public class LearningHubContext : DbContext
    {
        public LearningHubContext()
        {

        }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Theme> Themes { get; set; }
        public DbSet<Backend> Backends { get; set; }
        public DbSet<Frontend> Frontends { get; set; }
        public DbSet<Styling> Stylings { get; set; }
        public DbSet<University> Universities { get; set; }
        public LearningHubContext(DbContextOptions<LearningHubContext> options) : base(options) { }
    }
}

