using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectManagerAPI.Models
{
    public class TaskModel
    {
        public int Task_Id { get; set; }
        public string Task_Name { get; set; }
        public int Project_Id { get; set; }
        public Nullable<int> Parent_Id { get; set; }
        public System.DateTime Start_Date { get; set; }
        public System.DateTime End_Date { get; set; }
        public int Priority { get; set; }
        public bool Staus { get; set; }
        public string Parent_Name { get; set; }
    }
}