using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;
using sellseverything.Services;
using DataAccess;

namespace sellseverything.Controllers
{
    public class UserController : Controller
    {
        private DataContext dataContext;

        public UserController()
        {
            dataContext = new DataContext();
        }

        [Route("api/users")]
        public JsonResult GetUsers()
        {
            return Json(dataContext.Users.ToList());
        }
    }
}
