using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using System.Threading.Tasks;
using TGS.Scribe.Domain.Clock;

namespace TGS.Scribe.Web.Api.Controllers
{
    public class ProductsController
    {
        private readonly IClock _clock;

        public ProductsController(IClock clock)
        {
            _clock = clock;
        }

        [FunctionName(nameof(GetTime))]
        public async Task<IActionResult> GetTime(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req)
        {
            return new OkObjectResult($"Hello, {_clock.Now}");
        }
    }
}
