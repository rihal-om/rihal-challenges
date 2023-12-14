using RihalChallengeApp.Context;
using RihalChallengeApp.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RihalChallengeApp.Services
{
    public class CountryService
    {
        private readonly ApplicationDbContext _context;

        public CountryService(ApplicationDbContext context)
        {
            _context = context;
        }

        // Create
        public async Task AddCountry(Country country)
        {
            _context.Countries.Add(country);
            await _context.SaveChangesAsync();
        }

        // Read
        public async Task<Country> GetCountry(int id)
        {
            return await _context.Countries.FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<List<Country>> GetAllCountriesAsync()
        {
            return await _context.Countries.ToListAsync();
        }

        // Update
        public async Task UpdateCountry(Country country)
        {
            _context.Countries.Update(country);
            await _context.SaveChangesAsync();
        }

        // Delete
        public async Task DeleteCountry(int id)
        {
            var country = await GetCountry(id);
            if (country != null)
            {
                _context.Countries.Remove(country);
                await _context.SaveChangesAsync();
            }
        }
    }
}
