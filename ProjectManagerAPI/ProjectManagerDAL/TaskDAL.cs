using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectManagerDAL
{
   public class TaskDAL :ITask
    {
        public bool AddTask(Task task)
        {
            using (FSDEntities db = new FSDEntities())
            {
                if(task.Start_Date!= Convert.ToDateTime("01-01-0001 00:00:00"))
                { 
                Task taskManager = new Task();
                taskManager.Task_Name = task.Task_Name;
                taskManager.Parent_Id = task.Parent_Id;
                taskManager.Priority = task.Priority;
                taskManager.Start_Date = task.Start_Date;
                taskManager.End_Date = task.End_Date;
                taskManager.Staus = true;
                taskManager.Project_Id = task.Project_Id;               

                db.Tasks.Add(taskManager);
                db.SaveChanges();
                }

                else
                {
                    Parent_Task parent = new Parent_Task();
                    parent.Parent_Task1 = task.Task_Name;
                    db.Parent_Task.Add(parent);
                    db.SaveChanges();
                }
            }
            return true;
        }
        public bool UpdateTask(Task task)
        {
            using (FSDEntities db = new FSDEntities())
            {
                db.Configuration.ProxyCreationEnabled = false;

                var taskManager = (from p in db.Tasks
                                where p.Task_Id == task.Task_Id
                                select p).FirstOrDefault();
                if (taskManager != null)
                {


                    taskManager.Task_Name = task.Task_Name;
                    taskManager.Parent_Id = task.Parent_Id;
                    taskManager.Priority = task.Priority;
                    taskManager.Start_Date = task.Start_Date;
                    taskManager.End_Date = task.End_Date;
                    taskManager.Staus = true;
                    taskManager.Project_Id = task.Project_Id;
                    db.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }



            }
        }

        public bool EndTask(int id)
        {
            using (FSDEntities db = new FSDEntities())
            {
                db.Configuration.ProxyCreationEnabled = false;

                var taskData = (from p in db.Tasks
                                where p.Task_Id == id
                                select p).FirstOrDefault();
                if (taskData != null)
                {


                    taskData.Staus = false;
                    taskData.End_Date = System.DateTime.Now;
                    db.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }



            }
        }

        public List<Task> GetAllTask()
        {
            try
            {
                using (FSDEntities db = new FSDEntities())
                {

                    db.Configuration.ProxyCreationEnabled = false;

                    var taskData = (from p in db.Tasks
                                    join parent in db.Parent_Task
                                    on p.Parent_Id equals parent.Parent_Id into ps
                                    from parent in ps.DefaultIfEmpty()
                                    select new {
                                        Task_Id=p.Task_Id,
                                       Task_Name=p.Task_Name,
                                       Start_Date=p.Start_Date,
                                       End_Date=p.End_Date,
                                       Priority=p.Priority,
                                       Parent_Name=p.Parent_Id == null ? "No Parent Task Present" : parent.Parent_Task1,
                                       Status=p.Staus,
                                       Project_Name=db.Projects.Where(a=>a.Project_Id==p.Project_Id).Select(a=>a.Project_Name).FirstOrDefault(),
                                       Project_Id=p.Project_Id
                                    }).ToList().Select(x => new Task()
                                    {
                                        Task_Id=x.Task_Id,
                                        Task_Name = x.Task_Name,
                                        Start_Date = x.Start_Date,
                                        End_Date = x.End_Date,
                                        Priority = x.Priority,
                                        Parent_Name = x.Parent_Name,
                                        Staus=x.Status,
                                        Project_Id=x.Project_Id,
                                        Project_Name=x.Project_Name
                                    });
                    return taskData.ToList();

                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        public List<Parent_Task> GetAllParentTask()
        {
            try
            {
                
                using (FSDEntities db = new FSDEntities())
                {
                    db.Configuration.ProxyCreationEnabled = false;

                    var taskData = (from p in db.Parent_Task
                                    select p).ToList();
                    return taskData;

                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        public Task GetTaskById(int id)
        {
            try
            {
               

                using (FSDEntities db = new FSDEntities())
                {
                    db.Configuration.ProxyCreationEnabled = false;
                    var taskData = (from p in db.Tasks
                                    where p.Task_Id == id
                                    select p).FirstOrDefault();
                    return taskData;

                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
