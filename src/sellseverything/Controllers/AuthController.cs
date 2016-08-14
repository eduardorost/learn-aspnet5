using System.Linq;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;
using sellseverything.ViewModels;
using DataAccess;
using Domain.Entities;
using System.Security.Cryptography;
using System.Text;

namespace sellseverything.Controllers
{
    public class AuthController : Controller
    {
        private DataContext dataContext;

        public AuthController()
        {
            dataContext = new DataContext();
        }

        [Route("api/auth")]
        [HttpPost]
        public JsonResult Login([FromBody] AuthViewModel authViewModel)
        {
            User user = dataContext.Users.FirstOrDefault(u => u.Email == authViewModel.Email);

            if (user == null)
                return Json(null);

            MD5 md5 = new MD5CryptoServiceProvider();
            md5.ComputeHash(Encoding.ASCII.GetBytes(authViewModel.Password));
            byte[] hash = md5.Hash;

            StringBuilder strBuilder = new StringBuilder();

            foreach (var hashByte in hash)
            {
                strBuilder.Append(hashByte.ToString("x2"));
            }

            if (user.Password != strBuilder.ToString())
                return Json(null);

            return Json(new {
                UserId = user.UserId,
                Name = user.Name,
                Email = user.Email,
                isAdm = user.Email.Contains("admin")
            });
        }
    }
}
