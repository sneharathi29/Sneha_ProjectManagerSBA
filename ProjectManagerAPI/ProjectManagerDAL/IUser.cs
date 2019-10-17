using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectManagerDAL
{
    public interface IUser
    {
        List<User> GetAllUsers();
        bool AddUser(User user);
        bool DeleteUser(int userId);
        User GetUsersById(int userId);
        bool UpdateUser(User user);
    }
}
