using System;

namespace TGS.Scribe.Domain.Models
{
    public class OrgansationStringingMachine
    {
        public Manufacturer Manufacturer { get; set; } = Manufacturer.Other;
        public string Model { get; set; }
        public string DisplayName { get; set; }
        
        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastUpdatedUtc { get; set; }
    }
}
