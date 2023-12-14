using RihalChallengeApp.Context;
using RihalChallengeApp.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;

namespace RihalChallengeApp.Services
{
    public class StudentService
    {
        private readonly ApplicationDbContext _context;

        public StudentService(ApplicationDbContext context)
        {
            _context = context;
        }

        // Create
        public async Task AddStudent(Student student)
        {
            _context.Students.Add(student);
            await _context.SaveChangesAsync();
        }

        // Read
        public async Task<List<Student>> GetAllStudentsAsync()
        {
            return await _context.Students.ToListAsync();
        }

        public async Task<Student> GetStudentById(int id)
        {
            return await _context.Students.FirstOrDefaultAsync(s => s.Id == id);
        }

        // Update
        public async Task UpdateStudent(Student student)
        {
            _context.Students.Update(student);
            await _context.SaveChangesAsync();
        }

        // Delete
        public async Task DeleteStudent(int id)
        {
            var student = await _context.Students.FirstOrDefaultAsync(s => s.Id == id);
            if (student != null)
            {
                _context.Students.Remove(student);
                await _context.SaveChangesAsync();
            }
        }
        public async Task<Dictionary<string, int>> GetStudentCountPerClassAsync()
        {
            return await _context.Students
                .Include(s => s.Class)
                .GroupBy(s => s.Class.ClassName)
                .Select(g => new { ClassName = g.Key ?? "Unknown", Count = g.Count() })
                .ToDictionaryAsync(g => g.ClassName, g => g.Count);
        }


        public async Task<Dictionary<string, int>> GetStudentCountPerCountryAsync()
        {
            return await _context.Students
                .Include(s => s.Country)
                .GroupBy(s => s.Country.Name)
                .Select(g => new { CountryName = g.Key, Count = g.Count() })
                .ToDictionaryAsync(g => g.CountryName, g => g.Count);
        }

        public async Task<double> GetAverageAgeOfStudentsAsync()
        {
            var today = DateTime.UtcNow;
            var students = await _context.Students.ToListAsync();
            var averageAge = students
                .Where(s => s.DateOfBirth.HasValue)
                .Average(s => (today - s.DateOfBirth.Value).TotalDays / 365.25);

            return averageAge;
        }
        
    }
}
