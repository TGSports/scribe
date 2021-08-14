using System;

namespace TGS.Scribe.Domain.Models
{
    public interface ITrackDateChanges
    {
        DateTime CreatedDateUtc { get; set; }
        DateTime LastUpdatedUtc { get; set; }
    }
}
