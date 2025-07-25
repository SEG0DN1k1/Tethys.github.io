using Microsoft.AspNetCore.StaticFiles;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseStaticFiles(new StaticFileOptions
{
    ContentTypeProvider = new FileExtensionContentTypeProvider
    {
        Mappings = {
            [".css"] = "text/css",
            [".js"] = "text/javascript"
        }
    }
});

app.MapFallbackToFile("index.html");
app.Run();