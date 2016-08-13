using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Mvc;
using Microsoft.Extensions.Logging;
using sellseverything.Models;
using sellseverything.Services;
using sellseverything.ViewModels.Manage;

namespace sellseverything.Controllers
{
    [Authorize]
    public class CustomerController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ICustomerService _customerService;
        private readonly ILogger _logger;

        public CustomerController(UserManager<ApplicationUser> userManager, ICustomerService customerService)
        {
            _userManager = userManager;
            _customerService = customerService;
        }

        //
        // GET: /Customers
        public JsonResult GetCustomers()
        {
            var customers = new List<object>();
            customers.Add(new { name = "teste" });

            return Json(customers);
        }

        #region Helpers

        private async Task<ApplicationUser> GetCurrentUserAsync()
        {
            return await _userManager.FindByIdAsync(HttpContext.User.GetUserId());
        }

        #endregion
    }
}
