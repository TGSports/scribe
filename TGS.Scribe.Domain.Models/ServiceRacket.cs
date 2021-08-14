using System;

namespace TGS.Scribe.Domain.Models
{
    public class ServiceRacket
    {
        public Guid RacketId { get; set; }
        public RacketProduct Model { get; set; }
        public string Description { get; set; }
        public string DisplayName { get; set; }
        public string Serial { get; set; }
    }
}
