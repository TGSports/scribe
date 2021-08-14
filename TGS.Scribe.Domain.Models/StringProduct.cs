using System;

namespace TGS.Scribe.Domain.Models
{
    public class StringProduct
    {
        public Manufacturer Manufacturer { get; set; } = Manufacturer.Other;
        public string Name { get; set; }

        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastUpdatedUtc { get; set; }
    }
}
