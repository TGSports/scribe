using System;
using System.Collections.Generic;

namespace TGS.Scribe.Domain.Models
{
    public class ServiceRequest
    {
        public Guid ServiceRequestId { get; set; }
        public ServiceRacket Racket { get; set; }
        public ServiceCustomer Customer { get; set; }
        public StringProduct RequestedString { get; set; }

        public DateTime DateRacketReceivedUtc { get; set; }
        public DateTime DateServiceStartedUtc { get; set; }
        public DateTime DateServiceFinishedUtc { get; set; }
        public decimal RequestedTension { get; set; }
        public DateTime RequestedCollectionDate { get; set; }
        public bool RequestedCollectionDateAsap { get; set; }
        public string CustomerRequestNotes { get; set; }
        public string ServicingNotes { get; set; }

        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastUpdatedUtc { get; set; }

        public ICollection<Image> ServicingImages { get; set; } = new List<Image>();


        public void Start(DateTime startTimeUtc)
        {
            DateServiceStartedUtc = startTimeUtc;
        }

        public void Complete(DateTime completionTimeUtc, string servicingNotes)
        {
            DateServiceFinishedUtc = completionTimeUtc;
            ServicingNotes = servicingNotes;
        }
    }
}
