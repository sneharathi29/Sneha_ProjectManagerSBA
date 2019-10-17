using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectManagerDAL
{
    public class UserDAL :IUser
    {
        public List<User> GetAllUsers()
        {
            try
            {
                using (FSDEntities db = new FSDEntities())
                {
                    var userData = (from p in db.Users
                                    select p).ToList();
                    return userData;

                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        public User GetUsersById(int userId)
        {
            try
            {
                using (FSDEntities db = new FSDEntities())
                {
                    var userData = (from p in db.Users
                                    where p.User_Id==userId
                                    select p).FirstOrDefault();
                    return userData;

                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        public bool UpdateUser(User user)
        {
            try
            {
                using (FSDEntities db = new FSDEntities())
                {
                    var userData = (from p in db.Users
                                    where p.User_Id == user.User_Id
                                    select p).FirstOrDefault();
                    if (userData != null)
                    {
                        userData.First_Name = user.First_Name;
                        userData.Last_Name = user.Last_Name;
                        userData.Employee_id = user.Employee_id;

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
        public bool AddUser(User user)
        {
            using (FSDEntities db = new FSDEntities())
            {
                User taskManager = new User();
                taskManager.Employee_id = user.Employee_id;
                taskManager.First_Name = user.First_Name;
                taskManager.Last_Name = user.Last_Name;
               
                db.Users.Add(taskManager);
                db.SaveChanges();

            }
            return true;
        }

        public bool DeleteUser(int userId)
        {
            try
            {
                using (FSDEntities db = new FSDEntities())
                {
                    var userData = (from p in db.Users
                                    where p.User_Id==userId
                                    select p).FirstOrDefault();
                    db.Users.Remove(userData);
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
