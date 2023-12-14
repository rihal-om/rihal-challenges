using System;
using System.Collections.Generic;

namespace RihalChallengeApp.Models
{
    public class Country : BaseEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        
        // Navigation property to Students
        public List<Student> Students { get; set; }
    }
}
