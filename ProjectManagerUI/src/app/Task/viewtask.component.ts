import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../Task.model';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { TaskService } from '../task.service';
import { ProjectService } from '../project.service';
import { Project } from '../Project.model';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {
  isDesc: boolean = false;
  task:Task[];
  @Input() task1: Task;
  column: any;
  projectData: Project[];
  searchUser:string;

  filteredEmployees: Task[];

  private _searchTerm: string;

  get searchTerm(): string {
    return this._searchTerm;
  }

  // This setter is called everytime the value in the search text box changes
  set searchTerm(value: string) {
    this._searchTerm = value;
  }

  filterEmployees(searchString: string) {
    return this.task.filter(employee =>
      employee.Project_Name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
  constructor(private _route:Router,private _service:TaskService,
    private _projectService: ProjectService,
  ) { }

  ngOnInit() {
    this._projectService.getAllProject().subscribe(projectdata =>  this.projectData = projectdata);

    this._service.getTaskList().subscribe(taskData=>this.filteredEmployees=this.task=taskData);

  }
  EditTask(taskid : number)
  {
    return this._route.navigate(['/update/'+ this.task1.Task_Id]);
  }

  EndTask(taskid : number) {
    console.log(taskid);
    this._service.deleteUser(taskid).subscribe(
      () => {console.log(`Employee with ID = ${taskid} Deleted`), 
      this.ngOnInit();
    });

  }
  sortByFName(property)
  {
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.filteredEmployees.sort(function(a, b){
        if(a[property] < b[property]){
            return -1 * direction;
        }
        else if( a[property] > b[property]){
            return 1 * direction;
        }
        else{
            return 0;
        }
    });

}
GetProjectId(pName: string) {
  
  $('#inputTask4').val(pName);
  $('#projectModal').modal('hide');
  this.filteredEmployees = this.filterEmployees(pName);

}
}
