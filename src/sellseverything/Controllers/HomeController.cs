﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using DataAccess;

namespace sellseverything.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            DataContext db = new DataContext();

            var cursos = db.Users.ToList();

            return View();
        }
    }
}
