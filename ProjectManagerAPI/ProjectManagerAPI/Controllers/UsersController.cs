using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ProjectManagerDAL;

namespace ProjectManagerAPI.Controllers
{
    public class UsersController : ApiController
    {
        UserDAL dal = new UserDAL();
        // GET api/<controller>
        public IHttpActionResult Get()
        {

            var data = dal.GetAllUsers();
            if (data == null)
            {
                return NotFound();
            }

            return Ok(data);
        }

        // GET api/<controller>/5
        public IHttpActionResult Get(int id)
        {
            var res = dal.GetUsersById(id);           
                return Ok(res);            
            
               
        }

        // POST api/<controller>
        public IHttpActionResult Post(User task)
        {
            bool res = dal.AddUser(task);
            if (res)
            {
                return Ok();
            }
            else
                return NotFound();
        }

        // PUT api/<controller>/5
        public IHttpActionResult Put([FromBody]User value)
        {
            bool res = dal.UpdateUser(value);
            if (res)
            {
                return Ok();
            }
            else
                return NotFound();
        }

        // DELETE api/<controller>/5
        public IHttpActionResult Delete(int id)
        {

            bool res = dal.DeleteUser(id);
            if (res)
            {
                return Ok();
            }
            else
                return NotFound();
        }
    }
}