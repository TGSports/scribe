using System;
using System.Collections.Generic;

namespace TGS.Scribe.Domain.Models
{
    public class ServiceCustomer
    {
        public Guid OrganisationId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
    }
}
