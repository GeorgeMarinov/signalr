using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalR
{
    public interface ITestHub
    {
        Task Update(string data);
    }

    public class TestHub : Hub<ITestHub>
    {
        public async Task Update(string data)
        {
            await Clients.All.Update(data);
        }
    }
}
