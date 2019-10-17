import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { User } from '../User.model';
import { Project } from '../Project.model';
import { Parent } from '../Parent.model';
import { Task } from '../Task.model';
import { ProjectService } from '../project.service';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  sub: any;
  id: number;
  userData: User[];
  projectData: Project[];
  parentData:Parent[];
  searchParent:string;
  searchUser:string;
  task: Task= {
    Task_Id:null,
    Task_Name:null,
    Parent_Id:null,
    Project_Id:null,
    Priority:null,
    Start_Date:null,
    End_Date:null,
    Staus:null,
    IsParent:null,
    User_Id:null,
    Parent_Name:null,
    Project_Name:null
    }
  constructor(private _service:TaskService,
    private route: ActivatedRoute,
  private _router:Router,private _shared: SharedService, 
  private _projectService: ProjectService,) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id);

      this._service.getUserByID(this.id).subscribe(taskData=>this.task=taskData);

      this._shared.getAllUser().subscribe(user => this.userData = user);
    this._projectService.getAllProject().subscribe(projectdata => this.projectData = projectdata);
    this._service.getAllParent().subscribe(parentdata => this.parentData = parentdata);
  })
}

updateTask()
{
console.log(this.task);
 return this._service.updateTask(this.task).subscribe(
  (data: Task) => {
    // log the employee object after the post is completed
    console.log(data);
    this._router.navigate(['view']);
  }
);

}

GetUserId(userId: number) {
  this.task.User_Id = userId;
  $('#managerId').val(userId);
  $('#exampleModal').modal('hide');

}
GetParentId(parentId: number) {
  this.task.Parent_Id = parentId;
  $('#parentId').val(parentId);
  $('#parentModal').modal('hide');

}
}
