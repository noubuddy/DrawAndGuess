using SignalRDraw;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddSignalR();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
}
app.UseStaticFiles();

app.MapHub<DrawHub>("/draw");
app.MapHub<ChatHub>("/chatHub");

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.Run();
