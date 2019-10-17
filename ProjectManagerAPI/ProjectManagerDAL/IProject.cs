using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectManagerDAL
{
   public interface IProject
    {
        List<Project> GetAllProjects();
        Project GetProjectById(int projectId);
        bool UpdateProject(Project project);
        bool AddProject(Project project);
        bool DeleteProject(int projectId);
    }
}
