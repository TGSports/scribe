using System;

namespace TGS.Scribe.Domain.Models
{
    public class Image : ITrackDateChanges
    {
        public string Url { get; set; }
        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastUpdatedUtc { get; set; }
    }
}
