import { Component, OnInit } from '@angular/core';
import { Project } from '../Project.model';
import { SharedService } from '../shared.service';
import { ProjectService } from '../project.service';
import { User } from '../User.model';
import { Task } from '../Task.model';
import { TaskService } from '../task.service';
import { Parent } from '../Parent.model';
import { Router } from '@angular/router';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  userData: User[];
  projectData: Project[];
  parentData:Parent[];
  searchProject:string;
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
  constructor(private _shared: SharedService, 
    private _projectService: ProjectService,
  private _taskShared:TaskService,
private _route:Router) { }

  ngOnInit() {
    this._shared.getAllUser().subscribe(user => this.userData = user);
    this._projectService.getAllProject().subscribe(projectdata => this.projectData = projectdata);
    this._taskShared.getAllParent().subscribe(parentdata => this.parentData = parentdata);

  }

  GetProjectId(projectId: number) {
    this.task.Project_Id = projectId;
    $('#projectId').val(projectId);
    $('#projectModal').modal('hide');

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

  saveTask()
  {

    return this._taskShared.SaveTask(this.task).subscribe(
      (data: Task) => {
        // log the employee object after the post is completed
        console.log(data);
        this._route.navigate(['view']);

        
      });
  }

}
