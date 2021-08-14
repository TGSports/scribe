using System;

namespace TGS.Scribe.Domain.Models
{
    public class RacketProduct
    {
        public Manufacturer Manufacturer { get; set; } = Manufacturer.Other;
        public string Series { get; set; }
        public string Model { get; set; }


        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastUpdatedUtc { get; set; }
    }
}
