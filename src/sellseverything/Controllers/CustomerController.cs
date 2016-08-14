using System.Collections.Generic;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;
using sellseverything.Services;

namespace sellseverything.Controllers
{
    [Authorize]
    public class CustomerController : Controller
    {
        private readonly ICustomerService _customerService;

        public CustomerController(ICustomerService customerService)
        {
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
    }
}
