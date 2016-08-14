using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;
using sellseverything.Services;
using DataAccess;
using System;
using sellseverything.ViewModels;
using Newtonsoft.Json;
using System.Data.Entity.Core.Objects;
using System.Data.Entity;

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
        public JsonResult GetCustomers(FilterCustomersViewModel filter)
        {
            var beginDate = !filter.LastPurchase.HasValue ? DateTime.MinValue : filter.LastPurchase.Value;
            var endDate = !filter.Until.HasValue ? DateTime.MaxValue : filter.Until.Value;

            var results = from c in dataContext.Clients.Include("Classification").Include("Region.City")
                          where (String.IsNullOrEmpty(filter.Name) || c.Name == filter.Name)
                            && (String.IsNullOrEmpty(filter.Gender) || c.Gender == filter.Gender)
                            && ((!c.LastPurchase.HasValue && !filter.LastPurchase.HasValue && !filter.Until.HasValue) || (c.LastPurchase.HasValue && c.LastPurchase.Value >= beginDate && c.LastPurchase.Value <= endDate))
                            && (!filter.RegionId.HasValue || c.RegionId == filter.RegionId)
                            && (!filter.CityId.HasValue || c.Region.CityId == filter.CityId)
                            && (!filter.ClassificationId.HasValue || c.ClassificationId == filter.ClassificationId)
                            && (!filter.UserId.HasValue || c.SellerId == filter.UserId)
                          select c;
            
            return Json(results);
        }
    }
}
