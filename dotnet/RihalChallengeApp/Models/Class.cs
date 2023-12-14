using System;
using System.Collections.Generic;

namespace RihalChallengeApp.Models
{
    public class Class : BaseEntity
    {
        public int Id { get; set; }
        public string ClassName { get; set; }
        
        // Navigation property to Students
        public List<Student> Students { get; set; }
    }
}
