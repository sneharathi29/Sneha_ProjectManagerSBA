using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectManagerDAL
{
   public class ProjectDAL :IProject
    {
        public List<Project> GetAllProjects()
        {
            try
            {
                using (FSDEntities db = new FSDEntities())
                {
                    db.Configuration.ProxyCreationEnabled = false;

                    var projectData = (from p in db.Projects
                                       
                                       //join task in db.Tasks
                                       //on p.Project_Id equals task.Project_Id into ps
                                       //from task in ps.DefaultIfEmpty()
                                       select new 
                                    {
                                        Project_Id=p.Project_Id,
                                        Project_Name=p.Project_Name,
                                        Start_Date= p.Start_Date,
                                        End_Date=p.End_Date,
                                        Manager_Id=p.Manager_Id,
                                        Priority=p.Priority,
                                        No_Of_Task= db.Tasks.Where(x=>x.Project_Id==p.Project_Id).Count(),
                                        Completed_Task= db.Tasks.Where(x=>x.End_Date<=System.DateTime.Now && x.Project_Id==p.Project_Id).Count()

                                       }).ToList().Select(x=> new Project()
                                    {
                                        Project_Id = x.Project_Id,
                                        Project_Name = x.Project_Name,
                                        Start_Date = x.Start_Date,
                                        End_Date = x.End_Date,
                                        Manager_Id = x.Manager_Id,
                                        Priority = x.Priority,
                                        No_Of_Task = x.No_Of_Task,
                                        Completed_Task=x.Completed_Task
                                       }).Distinct();
                    return projectData.ToList();

                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        public Project GetProjectById(int projectId)
        {
            try
            {
                using (FSDEntities db = new FSDEntities())
                {
                    db.Configuration.ProxyCreationEnabled = false;

                    var projectData = (from p in db.Projects
                                    where p.Project_Id == projectId
                                    select p).FirstOrDefault();
                    return projectData;

                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        public bool UpdateProject(Project project)
        {
            try
            {
                using (FSDEntities db = new FSDEntities())
                {
                    db.Configuration.ProxyCreationEnabled = false;

                    var projectData = (from p in db.Projects
                                    where p.Project_Id == project.Project_Id
                                    select p).FirstOrDefault();
                    if (projectData != null)
                    {
                        projectData.Project_Name = project.Project_Name;
                        projectData.Start_Date = project.Start_Date;
                        projectData.End_Date = project.End_Date;
                        projectData.Manager_Id = project.Manager_Id;
                        projectData.Priority = project.Priority;

                        db.SaveChanges();
                        return true;
                    }

                    else
                        return false;
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        public bool AddProject(Project project)
        {
            using (FSDEntities db = new FSDEntities())
            {
                Project projectData = new Project();
                projectData.Project_Name = project.Project_Name;
                projectData.Start_Date = project.Start_Date;
                projectData.End_Date = project.End_Date;
                projectData.Manager_Id = project.Manager_Id;
                projectData.Priority = project.Priority;

                db.Projects.Add(projectData);
                db.SaveChanges();

            }
            return true;
        }

        public bool DeleteProject(int projectId)
        {
            try
            {
                using (FSDEntities db = new FSDEntities())
                {
                    db.Configuration.ProxyCreationEnabled = false;

                    var userData = (from p in db.Projects
                                    where p.Project_Id == projectId
                                    select p).FirstOrDefault();
                    db.Projects.Remove(userData);
                    db.SaveChanges();

                    return true;

                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
