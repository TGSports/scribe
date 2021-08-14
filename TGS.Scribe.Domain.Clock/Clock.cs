using System;

namespace TGS.Scribe.Domain.Clock
{
    public class Clock : IClock
    {
        public DateTime Now => DateTime.Now;

        public DateTime NowUtc => DateTime.UtcNow;
    }
}
