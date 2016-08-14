using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;
using sellseverything.Services;
using DataAccess;

namespace sellseverything.Controllers
{
    public class CustomerController : Controller
    {
        private DataContext dataContext;

        public CustomerController()
        {
            dataContext = new DataContext();
        }

        [Route("api/customers")]
        public JsonResult GetCustomers()
        {
            //Invalid column name 'Classification_ClassificationId'.
            //Invalid column name 'Region_RegionId'.
            //Invalid column name 'Seller_UserId'."}
            return Json(dataContext.Clients.Include("Classification").Include("Region.City").ToList());
        }
    }
}
