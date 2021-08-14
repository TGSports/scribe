using System;

namespace TGS.Scribe.Domain.Models
{
    public class Manufacturer
    {
        public string Name { get; set; }
        public int SortOrder { get; set; }


        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastUpdatedUtc { get; set; }

        public static Manufacturer Other = new Manufacturer {
            Name = "Other",
            SortOrder = Int32.MaxValue
        };
    }
}
