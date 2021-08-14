using System;

namespace TGS.Scribe.Domain.Clock
{
    public interface IClock
    {
        DateTime Now { get; }
        DateTime NowUtc { get; }
    }
}
