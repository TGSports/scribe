using MediatR;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TGS.Scribe.Domain.Models;

namespace TGS.Scribe.Application.Products.Queries
{
    public class GetRacketProductsQuery : IRequest<GetRacketProductsResponse>
    {
        public string SearchTerm { get; set; }
    }

    public class GetRacketProductsResponse
    {
        public List<RacketProduct> Results { get; set; } = new List<RacketProduct>();
    }

    public class GetRacketProductsQueryHandler : IRequestHandler<GetRacketProductsQuery, GetRacketProductsResponse>
    {
        public async Task<GetRacketProductsResponse> Handle(GetRacketProductsQuery request, CancellationToken cancellationToken)
        {
            return await Task.FromResult(new GetRacketProductsResponse());
        }
    }
}
