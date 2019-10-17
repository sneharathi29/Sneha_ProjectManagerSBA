using ProjectManagerAPI.Models;
using ProjectManagerDAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProjectManagerAPI.Controllers
{
    [RoutePrefix("api/Task")]
    public class TaskController : ApiController
    {
        TaskDAL dal = new TaskDAL();
        // GET api/<controller>
        [HttpGet]
        public IHttpActionResult Get()
        {

            var data = dal.GetAllTask();
            if (data == null)
            {
                return NotFound();
            }

            return Ok(data);
        }

        [HttpGet]
        [Route("getallparent")]
        public IHttpActionResult GetAllParent()
        {

            var data = dal.GetAllParentTask();
            if (data == null)
            {
                return NotFound();
            }

            return Ok(data);
        }
        // GET api/<controller>/5
        public IHttpActionResult Get(int id)
        {
            var res = dal.GetTaskById(id);
            return Ok(res);


        }

        // POST api/<controller>
        public IHttpActionResult Post(Task task)
        {
            bool res = dal.AddTask(task);
            if (res)
            {
                return Ok();
            }
            else
                return NotFound();
        }

        // PUT api/<controller>/5
        public IHttpActionResult Put([FromBody]Task value)
        {
            bool res = dal.UpdateTask(value);
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

            bool res = dal.EndTask(id);
            if (res)
            {
                return Ok();
            }
            else
                return NotFound();
        }
    }
}