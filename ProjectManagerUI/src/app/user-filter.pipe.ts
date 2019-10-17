import { Pipe, PipeTransform } from '@angular/core';
import { User } from './User.model';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(value: User[], searchUser: string): User[] {
    if(!searchUser||!value)
    {

      return value;
    }
    else
    {
      return value.filter(x=>x.First_Name.toLowerCase().indexOf(searchUser.toLowerCase())!==-1);
    }    
  }

}
