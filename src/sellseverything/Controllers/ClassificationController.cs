using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;
using sellseverything.Services;
using DataAccess;

namespace sellseverything.Controllers
{
    public class ClassificationController : Controller
    {
        private DataContext dataContext;

        public ClassificationController()
        {
            dataContext = new DataContext();
        }

        [Route("api/classifications")]
        public JsonResult GetClassifications()
        {
            return Json(dataContext.Classifications.ToList());
        }
    }
}
