using System;
using System.Collections.Generic;

namespace TGS.Scribe.Domain.Models
{
    public class Organisation
    {
        public Guid OrganisationId { get; set; }
        public string Name { get; set; }


        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastUpdatedUtc { get; set; }

        public Employee SuperAdmin { get; set; }

        public virtual ICollection<Employee> Employees { get; set; } = new List<Employee>();

        public virtual ICollection<OrgansationStringingMachine> StringingMachines { get; set; } = new List<OrgansationStringingMachine>();
    }
}
