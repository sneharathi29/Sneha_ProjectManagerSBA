using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectManagerDAL
{
   public interface ITask
    {
        bool AddTask(Task task);
        bool UpdateTask(Task task);
        List<Task> GetAllTask();
        bool EndTask(int id);
        List<Parent_Task> GetAllParentTask();
        Task GetTaskById(int id);
    }
}
