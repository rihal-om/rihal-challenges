using System;

namespace RihalChallengeApp.Models
{
    public class Student : BaseEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public int ClassId { get; set; }
        public int CountryId { get; set; }
        
        // Navigation properties
        public Class Class { get; set; }
        public Country Country { get; set; }
    }
}
