import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './Project.model';

@Pipe({
  name: 'projectfilter'
})
export class ProjectfilterPipe implements PipeTransform {

  transform(value: Project[], searchUser: any): any {
    if(!searchUser||!value)
    {

      return value;
    }
    else
    {
      return value.filter(x=>x.Project_Name.toLowerCase().indexOf(searchUser.toLowerCase())!==-1);
    }    
  }
  

}
