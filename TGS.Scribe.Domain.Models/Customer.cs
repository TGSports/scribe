using System;
using System.Collections.Generic;

namespace TGS.Scribe.Domain.Models
{
    public class Customer
    {
        public Guid OrganisationId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }


        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastUpdatedUtc { get; set; }

        public virtual ICollection<Racket> Rackets { get; set; } = new List<Racket>();
        public virtual ICollection<ServiceRequest> Services { get; set; } = new List<ServiceRequest>();
    }
}
