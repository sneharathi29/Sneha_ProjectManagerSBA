using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectManagerDAL
{
  public class UserModel
    {
        public int User_Id { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public int Employee_id { get; set; }
        public Nullable<int> Project_Id { get; set; }
        public Nullable<int> Task_Id { get; set; }

        public virtual Project Project { get; set; }
        public virtual Task Task { get; set; }
    }
}
