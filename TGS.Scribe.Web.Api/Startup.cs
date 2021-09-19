using System.IO;
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using TGS.Scribe.Domain.Clock;
using TGS.Scribe.Web.Api;

[assembly: FunctionsStartup(typeof(Startup))]
namespace TGS.Scribe.Web.Api
{
    public class Startup : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            builder.Services.AddSingleton<IClock, Clock>();
        }

        public override void ConfigureAppConfiguration(IFunctionsConfigurationBuilder builder)
        {
            FunctionsHostBuilderContext context = builder.GetContext();

            builder.ConfigurationBuilder
                .AddEnvironmentVariables()
                .AddJsonFile(Path.Combine(context.ApplicationRootPath, "settings.json"), optional: true, reloadOnChange: false)
                .AddJsonFile(Path.Combine(context.ApplicationRootPath, "local.settings.json"), optional: true, reloadOnChange: false);
        }
    }
}
