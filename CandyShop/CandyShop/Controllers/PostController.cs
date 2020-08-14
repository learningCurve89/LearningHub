using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Data;
using Data.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CandyShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly BloggingContext _context;

        public PostController(BloggingContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Post> Get()
        {
            var posts = _context.Posts.ToList();
            return posts;
        }
        // GET: api/<PostController>
        [HttpGet("{id}")]
        public async Task<ActionResult<Post>> GetById(int id)
        {
            var post = await _context.Posts.FindAsync(id);
            if(post == null)
            {
                return NotFound();
            }
            return post;
        }

        // POST api/<PostController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody]Post post)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid data");
            }
            _context.Posts.Add(post);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
