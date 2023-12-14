using RihalChallengeApp.Context;
using RihalChallengeApp.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RihalChallengeApp.Services
{
    public class ClassService
    {
        private readonly ApplicationDbContext _context;

        public ClassService(ApplicationDbContext context)
        {
            _context = context;
        }

        // Create
        public async Task AddClass(Class classEntity)
        {
            _context.Classes.Add(classEntity);
            await _context.SaveChangesAsync();
        }

        // Read
        public async Task<Class> GetClass(int id)
        {
            return await _context.Classes.FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<List<Class>> GetAllClassesAsync()
        {
            return await _context.Classes.ToListAsync();
        }

        // Update
        public async Task UpdateClass(Class classEntity)
        {
            _context.Classes.Update(classEntity);
            await _context.SaveChangesAsync();
        }

        // Delete
        public async Task DeleteClass(int id)
        {
            var classEntity = await GetClass(id);
            if (classEntity != null)
            {
                _context.Classes.Remove(classEntity);
                await _context.SaveChangesAsync();
            }
        }
    }
}
