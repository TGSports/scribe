using System;

namespace TGS.Scribe.Domain.Models
{
    public class Employee
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string EmployeeNumber { get; set; }
        public bool IsActive { get; set; }
        public EmployeeRole Roles { get; set; }

        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastUpdatedUtc { get; set; }

        public bool IsInRole(EmployeeRole role)
        {
            return Roles.HasFlag(role);
        }
    }
}
