using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;
using sellseverything.Services;
using DataAccess;

namespace sellseverything.Controllers
{
    public class CityController : Controller
    {
        private DataContext dataContext;

        public CityController()
        {
            dataContext = new DataContext();
        }

        [Route("api/cities")]
        public JsonResult GetCities()
        {
            return Json(dataContext.Cities.Include("Regions").ToList());
        }
    }
}
