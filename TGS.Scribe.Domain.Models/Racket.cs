using System;

namespace TGS.Scribe.Domain.Models
{
    public class Racket
    {
        public Guid RacketId { get; set; }
        public RacketProduct Model { get; set; }
        public string Description { get; set; }
        public string DisplayName { get; set; }
        public string Serial { get; set; }

        public Image Image { get; set; }
        
        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastUpdatedUtc { get; set; }
    }
}
