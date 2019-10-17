using ProjectManagerDAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProjectManagerAPI.Controllers
{
    public class ProjectController : ApiController
    {
        ProjectDAL dal = new ProjectDAL();
        // GET api/<controller>
        public IHttpActionResult Get()
        {

            var data = dal.GetAllProjects();
            if (data == null)
            {
                return NotFound();
            }

            return Ok(data);
        }

        // GET api/<controller>/5
        public IHttpActionResult Get(int id)
        {
            var res = dal.GetProjectById(id);
            return Ok(res);


        }

        // POST api/<controller>
        public IHttpActionResult Post(Project task)
        {
            bool res = dal.AddProject(task);
            if (res)
            {
                return Ok();
            }
            else
                return NotFound();
        }

        // PUT api/<controller>/5
        public IHttpActionResult Put([FromBody]Project value)
        {
            bool res = dal.UpdateProject(value);
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

            bool res = dal.DeleteProject(id);
            if (res)
            {
                return Ok();
            }
            else
                return NotFound();
        }
    }
}